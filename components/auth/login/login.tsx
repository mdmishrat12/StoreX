"use client";
import Button from "@/components/ui/button/button";
import Input from "@/components/ui/input/input";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Login Data:", data);
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password?.message}
          />
          <div>
            <Button
            className="w-full"
              type="submit" >
              Log in
            </Button>
          </div>
        </form>
      <div className="text-sm text-right">
        <a
          href="/auth/recover"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Forgot your password?
        </a>
      </div>
      {/* Social Signup Buttons */}
      <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <Button className="w-full" variant="outline">
                <Image
                width={5}
                height={5}
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="h-5 w-5 inline-block mr-2"
                />
                Login with google
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="w-full"
              >
                <Image
                width={5}
                height={5}
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                  className="h-5 w-5 inline-block mr-2"
                />
                Login with github
              </Button>
            </div>
          </div>
        </div>
      <div className="text-center">
        <p className="text-sm text-gray-600">
          {`Don't have an account?`}
          <a
            href="/auth/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Login;
