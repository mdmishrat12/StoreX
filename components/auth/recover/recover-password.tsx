'use client'
import Button from '@/components/ui/button/button';
import Input from '@/components/ui/input/input';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RecoverPasswordFormInputs {
  email: string;
}

const RecoverPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPasswordFormInputs>();

  const onSubmit: SubmitHandler<RecoverPasswordFormInputs> = (data) => {
    console.log('Recover Password Data:', data);
    // Add your recover password logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Recover your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {`Enter your email address, and we'll send you a link to reset your password.`}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            error={errors.email?.message}
          />
          <div>
            <Button
              type="submit"
              className='w-full' >
              Send Reset Link
            </Button>
          </div>
        </form>

        {/* Back to Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <a href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;