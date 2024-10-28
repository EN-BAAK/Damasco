import React from 'react'

interface Props {
  title: string,
  desc: string,
  img: string
}

const ProductsCard = ({ title, desc, img }: Props): React.JSX.Element => {
  return (
    <div className='products-card card border-0 overflow-hidden'>
      <div className="card-img-top overflow-hidden position-relative">
        <img src={img} alt={title} />
      </div>

      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className='text-black-50 fw-medium'>{desc}</p>
      </div>
    </div>
  )
}

export default ProductsCard
