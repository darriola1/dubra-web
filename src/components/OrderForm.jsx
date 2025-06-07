import React from 'react'
import FormBuilder from './FormBuilder'
import { z } from 'zod';
import { API_BASE_URL } from '../lib/constants';

export const orderSchema = z.object({
  descripcion: z.string().min(1, 'La descripción es obligatoria'),
  pickupAddress: z.string().min(1, 'La dirección de recogida es obligatoria'),
  dropoffAddress: z.string().min(1, 'La dirección de entrega es obligatoria'),
  usuarioId: z.number().int().min(1, 'ID de usuario inválido'),
  status: z.enum(['pendiente', 'en_camino', 'entregado', 'cancelado'], {
    errorMap: () => ({ message: 'Estado inválido' }),
  }),
});

const OrderForm = () => {
  
  const onSubmit = async (data) => {
  // Desestructuramos los datos del formulario
    const {
      descripcion,
      pickupAddress,
      dropoffAddress,
      usuarioId = 1,  //EDITAR CON EL ID DEL USUARIO LOGUEADO :D
      status = 'pendiente',
    } = data;

    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        descripcion,
        pickupAddress,
        dropoffAddress,
        usuarioId: Number(usuarioId), 
        status,
      }),
    });

    if (!res.ok) {
      const result = await res.json();
      throw new Error(result.error || 'Error al realizar el pedido');
    }
  };

    return (
    <FormBuilder
      title="Realiza tu pedido"
      description=""
      background="bg-dubraPrimary"
      recaptcha={false}
      fields={[
        { name: 'pickupAddress', label: 'Dirección de Recogida', type: 'text', placeholder: 'Calle Ejemplo 111' },
        { name: 'dropoffAddress', label: 'Dirección de Entrega', type: 'text', placeholder: 'Calle Ejemplo 222' },
        { name: 'descripcion', label: 'Descripción', type: 'text', placeholder: 'Detalle del paquete' },
      ]}
      schema={orderSchema}
      defaultValues={{
        pickupAddress: '',
        dropoffAddress: '',
        descripcion: '',
        status: 'pendiente',
        usuarioId: 1,
      }}
      onSubmit={onSubmit}
    />
  );
}

export default OrderForm