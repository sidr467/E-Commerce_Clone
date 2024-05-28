"use client"

import Image from "next/image"

function NavIcons() {
  return (
    <div className="flex gap-4 ic xl:gap-6 ">
      <Image
        src="/profile.png"
        alt="Profile icon"
        width={22}
        height={22}
        className=" cursor-pointer"
      />
      <Image
        src="/notification.png"
        alt="Notification icon"
        width={22}
        height={22}
        className=" cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt="Cart icon"
        width={22}
        height={22}
        className=" cursor-pointer"
      />
    </div>
  )
}

export default NavIcons
