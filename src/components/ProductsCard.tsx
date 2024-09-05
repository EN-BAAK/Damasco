import React from 'react'
import img1 from "../assets/about.jpg"

const ProductsCard = (): React.JSX.Element => {
  return (
    <div className='products-card card '>
      <div className="card-img-top">
        <img src={img1} alt="d" />
      </div>

      <div className="card-body">
        <h5 className="card-title">Loz moz</h5>
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nesciunt incidunt dolorem </p>
      </div>
    </div>
  )
}

export default ProductsCard
