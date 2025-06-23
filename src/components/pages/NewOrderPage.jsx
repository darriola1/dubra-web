import React from 'react';
import PlaceOrderForm from '../PlaceOrderForm';

export default function NewShipmentPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Envío</h1>
      <PlaceOrderForm />
    </div>
  );
}
