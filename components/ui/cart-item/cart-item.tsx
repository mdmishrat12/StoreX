import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'

const CartItem = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full border">
            <div className="flex gap-4 items-center">
            <Image width={100} height={110} alt='product' src="/product-1.jpg"/>
            <div className="">
                <h3>Product-1</h3>
                <p>Price : $350</p>
            </div>
            </div>
            <div className="flex items-center gap-2">
                <Minus/>
               <input type="number" defaultValue={1} name="" id="" className=' text-center bg-white w-[50px] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none border'/>
               <Plus/>
            </div>
            <Trash/>
        </div>
  )
}

export default CartItem