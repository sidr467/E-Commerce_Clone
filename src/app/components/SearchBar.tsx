"use client"

import Image from "next/image"

function SearchBar() {
  return (
    <form
      className=" flex items-center justify-center gap-4 bg-gray-100 p-2 rounded-md flex-1 "
      action=""
    >
      <input type="text" placeholder="Search" className=" flex-1 bg-transparent outline-none" />
      <button className=" cursor-pointer">
        <Image src="/search.png" alt="Search icon" width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
