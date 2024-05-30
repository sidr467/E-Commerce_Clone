function Filter() {
  return (
    <div className=" mt-12 flex justify-between">
      <div className=" flex gap-6 flex-wrap">
        <select
          name="Type"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Minimum Price"
          className=" text-xs rounded-2xl ring-1 ring-gray-400 text-center w-24"
        />
        <input
          type="text"
          name="max"
          placeholder="Maximum Price"
          className=" text-xs rounded-2xl ring-1 ring-gray-400 text-center w-24"
        />
        <select
          name="Size"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="physical">Size</option>
          <option value="digital">Size2</option>
        </select>
        <select
          name="Color"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="physical">Color</option>
          <option value="digital">Color2</option>
        </select>
        <select
          name="Category"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="physical">Category</option>
          <option value="digital">Category2</option>
        </select>
        <select
          name="AllFilters"
          id=""
          className=" py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="physical">All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name=""
          id=""
          className=" py-2 px-4 rounded-2xl font-medium text-sm bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
