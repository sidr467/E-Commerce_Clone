"use client"

import { url } from "inspector"
import Image from "next/image"
import { useState } from "react"

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/4314063/pexels-photo-4314063.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/6654403/pexels-photo-6654403.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/18353382/pexels-photo-18353382/free-photo-of-black-gopro-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/14722844/pexels-photo-14722844.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

function ProductImages() {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex gap-4 justify-between mt-8">
        {images.map((image, index) => (
          <div
            className=" w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={image.id}
            onClick={() => setIndex(index )}
          >
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
