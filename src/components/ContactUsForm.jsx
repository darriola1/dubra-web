import React from 'react'
import FormBuilder from './FormBuilder'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { API_BASE_URL } from '@/lib/constants'
import { useAuth } from '@/context/AuthContext'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ContactUsForm = () => {

    const schema = z.object({
        email: z.string().min(1, 'El email es obligatorio').email('Email inválido'),
        subject: z.string().min(1, 'El asunto es requerido'),
        body: z.string().min(1, 'Debe de tener un cuerpo')
    })

    const onSubmit = async (data) => {
        const { email, body, subject } = data;
        const res = await fetch(`${API_BASE_URL}/email/send/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, body, subject }),
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
            }
        })
    };

    const fields = [
        {name: 'email', label: 'Email', type: 'text', placeholder: 'Ej: cliente@gmail.com'},
        {name: 'subject', label: 'Asunto', type: 'text', placeholder: 'Ej: Pedidos por whatsapp..'},
        {name: 'body', label: 'Cuerpo', type: 'textarea', placeholder: 'Ej: Hola Dubra, soy..'},
    ]

    const { setValue, formState: { errors }, control, handleSubmit } = useForm({
        resolver: zodResolver(schema),
    });

  return (
    <div className='flex h-full justify-center'>
        <FormBuilder
        title={'Contactanos'}
        fields={fields}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
        setValue={setValue}
        background={'bg-dubraPrimary'}
        />
    </div>
  )
}

export default ContactUsForm