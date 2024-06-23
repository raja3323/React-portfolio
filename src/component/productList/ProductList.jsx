import Product from "../product/Product"
import { products } from "../../data"
import "./productList.css"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Deepanshu</h1>
        <p className="pl-desc">Lama is very creative portfolio that your work has been waiting Beautiful homes, stunning portfolio styles & a whole lote mroe inside</p>
      </div>
      <div className="pl-list">
      {products.map(item=>(
        <Product img={item.img} link={item.link} key={item.id}/>
      ))}
      </div>
    </div>
  )
}

export default ProductList
