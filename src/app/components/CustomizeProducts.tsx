function CustomizeProducts() {
  return (
    <div className=" flex flex-col gap-6">
      <h4 className=" font-medium"> Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-500 cursor-pointer relative bg-black">
          <div className=" absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-500 cursor-pointer relative bg-red-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-500 cursor-not-allowed relative bg-green-500">
          <div className=" absolute w-10 h-[2px] bg-red-500 top-1/2 left-1/2 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3"></ul>
    </div>
  )
}
export default CustomizeProducts
