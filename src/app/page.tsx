import Slider from "./components/Slider"
import ProductList from "./components/ProductList"

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Feature Products</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage
