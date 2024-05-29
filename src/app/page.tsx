import Slider from "./components/Slider"
import ProductList from "./components/ProductList"
import CategoryList from "./components/CategoryList"

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold">Feature Products</h1>
        <ProductList />
      </div>
      <div className="mt-24  ">
        <h1 className="text-2xl font-bold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Category Products</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
    </div>
  )
}

export default HomePage
