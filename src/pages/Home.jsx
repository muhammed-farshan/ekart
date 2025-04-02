import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


function Home() {
  const allProducts = useFetch('https://fakestoreapi.com/products')
  console.log("allProducts");
  console.log(allProducts);
  const dispatch = useDispatch()
  return (
    <>
      <Row className='m-5'>
        {
          allProducts.length > 0 ?
            allProducts.map(item => (
              <Col className='mb-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text >
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'>price: &#x20B9;{item.price}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant="outline-danger" onClick={()=>dispatch(addToWishlist(item))}><i class='fa-solid fa-heart'></i></Button>
                      <Button variant="outline-success"  onClick={()=>dispatch(addToCart(item))}><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :
           <p>no found</p>
        }

      </Row>
    </>

  )
}

export default Home