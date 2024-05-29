import Link from "next/link"
import Image from "next/image"

function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/" className="relative w-full h-80">
        <Image src="/toy.jpeg" alt="Product" fill sizes="25vw" />
      </Link>
    </div>
  )
}
export default ProductList
