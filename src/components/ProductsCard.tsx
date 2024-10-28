import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
  title: string,
  desc: string,
  img: string,
  animation: string,
  animationDelay: number
}

const ProductsCard = ({ title, desc, img, animation, animationDelay }: Props): React.JSX.Element => {
  return (
    <Card
      data-ani={animation}
      data-delay={animationDelay}
      className='products-card border-0 overflow-hidden'>
      <div className="card-img-top overflow-hidden position-relative">
        <img src={img} alt={title} />
      </div>

      <Card.Body>
        <Card.Title className="fw-semibold">{title}</Card.Title>
        <p className='text-black-50 fw-medium'>{desc}</p>
      </Card.Body>
    </Card>
  )
}

export default ProductsCard
