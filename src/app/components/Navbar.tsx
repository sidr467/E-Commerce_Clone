import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="flex items-center justify-between h-full ">
        {/*Mobile */}
        <Link href="/">
          <div className="text-2xl tracking-wide">SIDD</div>
        </Link>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar
