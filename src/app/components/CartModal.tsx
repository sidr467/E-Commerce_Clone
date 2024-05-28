"use client"

function CartModal() {
  const cartItems = false

  return (
    <div className=" absolute p-4 rounded-md bg-black text-white text-sm right-0 top-10 flex flex-col gap-6 z-20">
      {!cartItems ? <div>Cart is empty</div> : <div>Cart</div>}
    </div>
  )
}

export default CartModal
