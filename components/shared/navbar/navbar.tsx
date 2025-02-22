import BrandLogo from '@/components/ui/brand-logo/BrandLogo'
import React from 'react'
import {ShoppingCart, User} from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between max-w-7xl px-4 md:px-8 border-b py-4 mx-auto'>
        <BrandLogo/>
        <div className="flex items-center justify-center gap-4">
           <Link href='/cart' > <ShoppingCart className='inline-block'/> Cart</Link>
           <Link href='/auth/login' > <User className='inline-block'/> Login</Link>
        </div>
    </nav>
  )
}

export default Navbar