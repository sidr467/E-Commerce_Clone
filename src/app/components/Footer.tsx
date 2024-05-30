import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div>
      {/* Top */}
      <div className="">
        {/* Left */}
        <div className=" w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">SIDD</div>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A saepe
            eaque dignissimos commodi nam facere.
          </p>
          <span>hello@sid123</span>
          <span>+123456789</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="w-1/2"></div>
        {/* Right */}
        <div className="w-1/4"></div>
      </div>
      {/* Bottom */}
      <div className=""></div>
    </div>
  )
}

export default Footer
