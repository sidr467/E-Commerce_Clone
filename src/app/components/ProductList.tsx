import Link from "next/link"
import Image from "next/image"

function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12 ">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 easy"
          />
          <Image
            src="https://images.pexels.com/photos/3339211/pexels-photo-3339211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className=" flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-600">My description</div>
        <button className=" font-semibold w-max rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-xs hover:bg-primaryColor hover:text-white">Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 easy"
          />
          <Image
            src="https://images.pexels.com/photos/3339211/pexels-photo-3339211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className=" flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-600">My description</div>
        <button className=" font-semibold w-max rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-xs hover:bg-primaryColor hover:text-white">Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 easy"
          />
          <Image
            src="https://images.pexels.com/photos/3339211/pexels-photo-3339211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className=" flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-600">My description</div>
        <button className=" font-semibold w-max rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-xs hover:bg-primaryColor hover:text-white">Add to cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 easy"
          />
          <Image
            src="https://images.pexels.com/photos/3339211/pexels-photo-3339211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product"
            fill
            sizes="25vw"
            className=" absolute object-cover rounded-md"
          />
        </div>
        <div className=" flex justify-between ">
          <span className=" font-medium">Product Name</span>
          <span className=" font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-600">My description</div>
        <button className=" font-semibold w-max rounded-2xl ring-1 ring-primaryColor text-primaryColor py-2 px-4 text-xs hover:bg-primaryColor hover:text-white">Add to cart</button>
      </Link>
    </div>
  )
}
export default ProductList
