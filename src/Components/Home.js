import React from 'react'
import {Carousel} from 'react-bootstrap'
function Home() {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/heart-and-soul-picture-id1216425366?k=20&m=1216425366&s=612x612&w=0&h=2DTHso4Ryo4bobdaKDuLgqArtrgHpAPIq-8-mVGtyHs="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral"
      alt="Second slide" 
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://st.depositphotos.com/1011278/4006/i/600/depositphotos_40066125-stock-photo-lantern.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Home
