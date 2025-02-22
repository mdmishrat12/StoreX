'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserProfileFormInputs } from './types';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import Image from 'next/image';



const UserProfile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileFormInputs>();

  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitted,setIsSubmitted]= useState<boolean>(false)

  const onSubmit: SubmitHandler<UserProfileFormInputs> = (data) => {
    console.log('Profile Data:', data);
    console.log('Profile Picture:', profilePicture);
    setIsSubmitted(true)
    // Add your profile update logic here (e.g., API call)
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      setPreviewImage(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  // Mock user data (replace with data fetched from your backend)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    profilePicture: '/banner-1.jpg', // Default profile picture
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Profile</h2>
        {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400">
          <p className="text-sm text-green-700">Profile updated successfully!</p>
        </div>
      )}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Profile Picture Section */}
          <div className="flex items-center space-x-6">
            <div className="shrink-0">
              <Image
              width={100}
              height={100}
                className="h-24 w-24 rounded-full object-cover"
                src={previewImage || user.profilePicture}
                alt="Profile"
              />
            </div>
            <div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </label>
            </div>
          </div>

          {/* Profile Details Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              defaultValue={user.name}
              {...register('name', {
                required: 'Name is required',
              })}
              error={errors.name?.message}
            />
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email"
              defaultValue={user.email}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={errors.email?.message}
            />
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Enter your phone number"
              defaultValue={user.phone}
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                  message: 'Invalid phone number (e.g., 123-456-7890)',
                },
              })}
              error={errors.phone?.message}
            />
            <Input
              type="text"
              label="Address"
              placeholder="Enter your address"
              defaultValue={user.address}
              {...register('address', {
                required: 'Address is required',
              })}
              error={errors.address?.message}
            />
            <Input
              type="text"
              label="City"
              placeholder="Enter your city"
              defaultValue={user.city}
              {...register('city', {
                required: 'City is required',
              })}
              error={errors.city?.message}
            />
            <Input
              type="text"
              label="State"
              placeholder="Enter your state"
              defaultValue={user.state}
              {...register('state', {
                required: 'State is required',
              })}
              error={errors.state?.message}
            />
            <Input
              type="text"
              label="Zip Code"
              placeholder="Enter your zip code"
              defaultValue={user.zipCode}
              {...register('zipCode', {
                required: 'Zip code is required',
                pattern: {
                  value: /^[0-9]{5}$/,
                  message: 'Invalid zip code (e.g., 10001)',
                },
              })}
              error={errors.zipCode?.message}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit" >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;