"use client"

import Image from "next/image"

function CartModal() {
  const cartItems = true

  return (
    <div className="w-max absolute p-4 rounded-md bg-black text-white text-sm -right-2 top-10 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className=" text-xl font-semibold">Shopping Cart</h2>
        {/* List */}
          <div className="flex flex-col gap-8">
            {/* Items */}
            <div className="flex gap-4">
              <Image
                src="/toy.jpeg"
                alt="item"
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className="flex justify-center flex-col w-full gap-8">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-white text-black rounded-md">
                      49$
                    </div>
                  </div>
                  {/* Decription */}
                  <div className=" text-sm text-gray-500">Available</div>
                </div>
                {/* Bottom */}
                <div className=" flex justify-between text-sm">
                  <span className=" text-gray-500">Qty. 2</span>
                  <span className=" text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="/toy.jpeg"
                alt="item"
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className="flex justify-center flex-col w-full gap-8">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-white text-black rounded-md">
                      49$
                    </div>
                  </div>
                  {/* Decription */}
                  <div className=" text-sm text-gray-500">Available</div>
                </div>
                {/* Bottom */}
                <div className=" flex justify-between text-sm">
                  <span className=" text-gray-500">Qty. 2</span>
                  <span className=" text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* Card bottom */}
            <div className="">
              <div className="flex justify-between items-center font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className=" text-gray-500 mt-2 mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adi
              </p>
              <div className="flex justify-between text-sm">
                <button className=" rounded-md py-3 px-2 ring-1 ring-white ">View cart</button>
                <button className="rounded-md py-3 px-2 ring-1 bg-white text-black">Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal
