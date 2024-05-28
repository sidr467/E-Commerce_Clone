"use client"

import { useState } from "react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/8075346/pexels-photo-8075346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/9983596/pexels-photo-9983596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/9983599/pexels-photo-9983599.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
]

function Slider() {
  const [current, setCurrent] = useState(0)

  return (
    <div className=" h[calc(100vh-80px)] overflow-hidden">
      <div className=" w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div className="" key={slide.id}>
            {/* Text container */}
            <div className="">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}>
                <button>SHOP NOW</button>
              </Link>
            </div>
            {/* Image container */}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
