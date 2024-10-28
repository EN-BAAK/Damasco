import React from 'react'
import { Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

interface Props {
  title?: string,
  address: string,
  phone: string,
  telephone: string,
  side: boolean,
  animationDelay: number
}

const Branch = ({ title, address, phone, telephone, side, animationDelay }: Props): React.ReactNode => {
  const { t: translating } = useTranslation("global")

  return (
    <Card
      data-ani={side ? "left" : "right"}
      data-delay={animationDelay}
      className={`${side ? "right" : "left"} mx-lg-0 mx-auto branch-card border-0 shadow my-4`}>
      <Card.Body>
        {title &&
          <Card.Title className='fs-2 fw-bold mb-3'>{title}</Card.Title>
        }

        <Card.Subtitle className='fs-5 text-black-50 fw-semibold mb-3'>{address}</Card.Subtitle>
        <Card.Text className='mb-0 text-black-50 fw-semibold'>{translating("branches.mobile")}: <span className='fw-normal'>{phone}</span></Card.Text>
        <Card.Text className='mb-0 text-black-50 fw-semibold'>{translating("branches.telephone")}: <span className='fw-normal'>{telephone}</span></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Branch
