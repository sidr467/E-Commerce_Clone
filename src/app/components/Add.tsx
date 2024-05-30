"use client"

import { useState } from "react"

function Add() {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex flex-col gap-4">
      <h4 className=" font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className=" flex items-center gap-4">
          <div className=" bg-gray-100 rounded-3xl py-2 px-4 flex items-center justify-between w-32">
            <button className=" cursor-pointer text-xl">-</button>
            {quantity}
            <button>+</button>
          </div>
          <div className="text-xs">
            Only <span className=" text-primaryColor">4 items</span> left!{" "}
            <br />
            {"Don't"} miss it
          </div>
        </div>
        <button className=" w-36 text-sm font-semibold rounded-3xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 hover:bg-primaryColor hover:text-white disabled:cursor-not-allowed disabled:bg-red-300 disabled:text-white disabled:ring-none ">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Add
