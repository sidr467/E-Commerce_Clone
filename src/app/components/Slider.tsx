"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className=" h-[calc(100vh-80px)] overflow-hidden">
      <div
        className=" w-max h-full flex transition-all ease-in-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* Text container */}
            <div className=" h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-16 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className=" text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className=" rounded-md py-3 px-4 bg-black text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* Image container */}
            <div className=" h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt="sliderImage"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className=" w-max px-3 py-5 opacity-70 rounded-2xl bg-black absolute m-auto left-1/2 bottom-2 flex gap-4">
          {slides.map((slide, index) => (
            <div
              className={`w-3 h-3 rounded-full ring-1 ring-white cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150 " : ""
              }`}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
