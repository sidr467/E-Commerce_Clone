import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className=" py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className=" flex justify-between gap-24">
        {/* Left */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SIDD</div>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A saepe
            eaque dignissimos commodi nam facere.
          </p>
          <span className="font-semibold">hello@sid123</span>
          <span className="font-semibold">+123456789</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="w-1/2 hidden lg:flex justify-between"></div>
        {/* Right */}
        <div className=" w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className=" font-semibold text-lg">SUBSCRIBE</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elite.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className=" p-4 w-3/4"
            />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className=""></div>
    </div>
  )
}

export default Footer
