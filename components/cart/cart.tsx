import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <>
       <h3 className='py-4'>Shopping Cart</h3>
       <div className="w-full">
        <div className="flex justify-between items-center p-4 w-full border">
            <div className="flex gap-4 items-center">
            <Image width={100} height={110} alt='' src=""/>
            <div className="">
                <h3>Product-1</h3>
                <p>Price : $350</p>
            </div>
            </div>
            <div className="flex items-center gap-2">
                <Minus/>
               <input type="number" name="" id="" className=' text-center w-[50px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none border'/>
               <Plus/>
            </div>
            <Trash/>
        </div>
       </div>
    </>
  )
}

export default Cart