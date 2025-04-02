import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistitems = useSelector(state=>state.WishListItems)
  const cartItems = useSelector(state=>state.cartItems)
  return (
    <>
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand>
                <Link to={'/'} style={{color:'#fff',textDecoration:'none'}}>
                  <i className="fa-solid fa-cart-shopping me-4"></i>
                   ECART
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link >
                  <Link to={'/wishlist'} style={{color:'#fff',textDecoration:'none'}}>
                  Wishlist
                  <Badge bg="secondary" className='ms-1'>{wishlistitems.length}</Badge>
                  </Link>
               </Nav.Link>
                <Nav.Link >
                  <Link to={'/cart'} style={{color:'#fff',textDecoration:'none'}}>
                  Cart
                  <Badge bg="secondary" className='ms-1'>{cartItems.length}</Badge>
                  </Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
   
  )
}

export default Header