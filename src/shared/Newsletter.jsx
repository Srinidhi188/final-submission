import React from 'react'

import '../styles/newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container className='bg_parallax_scroll '>
        <Row>
            <Col lg='6'>
            </Col>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to get useful traveling information.</h2>

                <div className="newsletter__input">
                     <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt neque earum praesentium quas rerum? Omnis.</p>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
