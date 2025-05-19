import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const FormError = ({ errors, name }) =>
  errors[name] ? <p className="text-sm text-red-500 font-bold">{errors[name].message}</p> : null;

export default function FormBuilder({
  title,
  description,
  fields,
  schema,
  defaultValues,
  onSubmit,
  footer,
  background
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleFormSubmit = async (data) => {
    if (!recaptchaToken) {
      setError('Por favor completá el reCAPTCHA');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await onSubmit({ ...data, recaptchaToken });
    } catch (err) {
      setError(err.message || 'Error inesperado');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className={`w-full max-w-md ${background}`}>
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="grid gap-4">
          {fields.map(({ name, label, type = 'text', placeholder }) => (
            <div className="grid gap-2" key={name}>
              <Label htmlFor={name}>{label}</Label>
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                disabled={isLoading}
                {...register(name)}
              />
              <FormError errors={errors} name={name} />
            </div>
          ))}

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">{error}</div>
          )}
          <div className='w-full flex justify-center'>
            <ReCAPTCHA
            sitekey="6Le6TT0rAAAAAHU_N1_hMggXegZoA8gyl4FNeEEM"
            onChange={(token) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
            />
          </div>
          

          <Button
            type="submit"
            className="bg-dubraSecondary hover:bg-dubraSecondary/80 font-bold"
            disabled={isLoading}
          >
            {isLoading ? 'Procesando...' : title}
          </Button>
        </form>
      </CardContent>

      {footer && <CardFooter className="flex flex-col items-center gap-4 border-t pt-6">{footer}</CardFooter>}
    </Card>
  );
}
