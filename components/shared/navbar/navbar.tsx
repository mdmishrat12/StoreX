import BrandLogo from '@/components/ui/brand-logo/BrandLogo'
import React from 'react'
import {ShoppingCart, User} from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between max-w-7xl px-4 md:px-8 border-b py-4 mx-auto'>
        <BrandLogo/>
        <div className="flex items-center justify-center gap-4">
            <ShoppingCart/>
            <User/>
        </div>
    </nav>
  )
}

export default Navbar