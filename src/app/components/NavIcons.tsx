"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()

  //temporary
  const isLoggedIn = false

  function handleProfile() {
    if (!isLoggedIn) {
      router.push("/login")
    }
    setIsProfileOpen((prev) => !prev)
  }

  return (
    <div className="flex gap-4 ic xl:gap-6 relative ">
      <Image
        src="/profile.png"
        alt="Profile icon"
        width={22}
        height={22}
        className=" cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className=" absolute p-4 rounded-md text-sm -left-7 top-10 z-20 bg-black text-white">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
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
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && 
      <div className="">
        
      </div>
      }
    </div>
  )
}

export default NavIcons
