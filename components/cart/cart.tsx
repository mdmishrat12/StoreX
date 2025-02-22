import CartItem from "../ui/cart-item/cart-item";
import Button from "../ui/button/button";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <div className="pb-8">
      <h3 className="py-4">Shopping Cart</h3>
      <div className="w-full space-y-2">
        {Array.from({ length: 5 }).map((item,i) => (
          <><CartItem key={i} />{item}</>
        ))}
      </div>
      <div className="border p-4 my-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3>Shipping Fee:</h3>
          <h3>$300</h3>
        </div>
        <div className="flex items-center justify-between text-lg">
          <h3>Total:</h3>
          <h3>$300</h3>
        </div>
      </div>
      </div>
     <div className="fixed bottom-0 w-[48rem]">
     <Link href='/checkout'><Button className="w-[46rem]">Continut Checkout</Button></Link>
     </div>
    </>
  );
};

export default Cart;
