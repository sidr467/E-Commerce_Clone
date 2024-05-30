import Image from "next/image"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAPMAIGN */}
      <div className=" bg-pink-50 px-4 h-60 flex justify-between">
        <div className=" w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className=" text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 50% off on <br />Selected Products</h1>
          <button className=" rounded-3xl bg-primaryColor text-white w-max py-2 px-7">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className=" object-contain" />
        </div>
      </div>
    </div>
  )
}

export default ListPage
