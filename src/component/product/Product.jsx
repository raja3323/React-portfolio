import "./product.css"


const Product = ({link, img}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer"><img src={img} className="p-img" alt="" /></a>
    </div>   
  )
}

export default Product
