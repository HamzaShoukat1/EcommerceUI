import Image from "next/image"
import ProductList from "./src/components/shared/ProductList"
export default function Homepage() {
  return (
    <div>
      <div className="relative aspect-3/1 mb-12">
        <Image  src="/featured.png" alt="featured product" fill/>
      </div>
      <ProductList />

    </div>
  )
}
