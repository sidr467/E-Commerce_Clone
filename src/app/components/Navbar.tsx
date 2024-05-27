import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile */}
      <div className="flex items-center justify-between h-full ">
        <Link href="/">
          <div className="text-2xl tracking-wide">SIDD</div>
        </Link>
        <Menu />
      </div>
      {/*Bigger screen */}
      <div className=" hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className=" w-1/3">
          <Link href="/">
            <Image src="/logo.png" alt="Logo Image" width={24} height={24} />
            <div className="text-2xl tracking-wide">SIDD</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className=" w-2/3">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar
