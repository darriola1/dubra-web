import React from 'react';
import FormBuilder from '../FormBuilder';
import { z } from 'zod';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { API_BASE_URL, ROUTES } from '../../lib/constants';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';

// Definición de esquema de validacion usando Zod
//test(val) devuelve true si el texto contiene el patrón buscado por la expresion regular
const schema = z.object({
  name: z.string()
  .min(3, 'El nombre es obligatorio, minimo 3 caracteres')
  .refine((val) => !/<\/?[a-z][\s\S]*>/i.test(val), {
    message: 'El nombre contiene caracteres inválidos',
  }),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  password: z.string()
  .min(6, 'Debe tener al menos 6 caracteres')
  .refine((val) => /[a-z]/.test(val), {
    message: 'Debe contener al menos una letra minúscula',
  })
  .refine((val) => /[A-Z]/.test(val), {
    message: 'Debe contener al menos una letra mayúscula',
  })
  .refine((val) => /\d/.test(val), {
    message: 'Debe contener al menos un número',
  })
  .refine((val) => /[\W_]/.test(val), {
    message: 'Debe contener al menos un símbolo',
  }),
  confirmPassword: z.string().min(6, 'Confirmación obligatoria'),
  rut: z.string().min(12, 'El RUT es obligatorio, minimo 12 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

export default function RegisterForm() {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(response => {
        if (response.status == 401){
          const {setUserNull} = useAuth();
          setUserNull();
          Navigate('/login')
        }
        if(!response.ok){
          throw new Error(response.error || 'Error al enviar');
        }
        if (response.status == 200){
          toast.success('Email enviado correctamente!')
          navigate('/dashboard');
        }
    })
  };

  const { setValue, formState: { errors }, control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  
  return (
    <FormBuilder
      title="Registrarse"
      description="Creá tu cuenta para comenzar a operar"
      background={'bg-dubraPrimary'}
      setValue={setValue}
      errors={errors}
      control={control}
      handleSubmit={handleSubmit}
      fields={[
        { name: 'name', label: 'Nombre completo', placeholder: 'Juan Pérez' },
        { name: 'email', label: 'Correo electrónico', placeholder: 'nombre@ejemplo.com' },
        { name: 'rut', label: 'RUT de empresa', placeholder: '123456789012' },
        { name: 'password', label: 'Contraseña', type: 'password', placeholder: '******' },
        { name: 'confirmPassword', label: 'Confirmar contraseña', type: 'password', placeholder: '******' },
      ]}
      onSubmit={onSubmit}
      footer={
        <p className="text-md text-muted-foreground">
          ¿Ya tenés una cuenta?{' '}
          <Link to={ROUTES.LOGIN} className="text-terracotta hover:underline">
            Iniciar sesión
          </Link>
        </p>
      }
      recaptcha={true}
    />
  );
}