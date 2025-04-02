import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeItemFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
         
function Wishlist() {
  const whislistArray = useSelector((state) => state.WishListItems)
  const dispatch = useDispatch()
  console.log("whishlist");
  console.log(whislistArray);
  const handleWishlist = (data) =>{
    dispatch(addToCart(data))
    dispatch(removeItemFromWishlist(data.id))
  }

  return (
    <>
      <Row className='m-5'>
        {
          whislistArray.length > 0 ?
            whislistArray.map(item => (
              <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }} className='p-3'>
                  <Card.Img variant="top" src={item.image} height={'200px'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text >
                      {item.description.slice(0, 50)}...
                      <p className='fw-bolder'>price: &#x20B9{item.price}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant="outline-danger" onClick={()=>dispatch(removeItemFromWishlist(item.id))} ><i class='fa-solid fa-trash'></i></Button>
                      <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :

            <div style={{ height: '40vh' }}>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAS1BMVEX////y8vL29vb8/Pz5+fnQ0NDk5OTp6enIyMju7u7f39/b29vNzc3X19fT09PFxcW+vr61tbWsq6yioqKWlZaNi4ydm5yCgIF8eXuDwuPjAAAGGUlEQVR4nO1b6YLyKhJlLfbNbeb9n3QgLm0SsPUL6nfvcH7YHZOQY1VRGwShgYGBgYGBgYGBZ6HotxlUYcm3GVSgZJT62yRqkPjbDKrQ7NsMBgb+zWDfn/iUUsYW3lr573C5PF0AaG2c59ZY7m5OyMhovycvwX9gGBPhGkmo4PR7QRjsmZJ3xkxatHA5Q2B5LRUfo0UFCEwYLSgmlmNcMyPA8tPio4zgCYTqdkLw4RTmymmCkL9en+ctybcIMM5K/6aJQfEckTV0RRkWWuc5m2FttkYtBGYivoUXWbAiXpOrmziLRYF23MogJTcaVDZFdj9Jye/i3c4KYyWxEEIb78sstWWSlmnRNvfQP+NakcKYRcm9BqHIQixNWtM11vRjxSq0CH/RWEL5wDF2Y7W09jMt/drvxnz6Y/pVGjVhPeUi7gHdK58qK0zCS97cqQ/Rcqtw+AjdQ1LVtHBxEa+MEjqzqvisi7ja4Trbo5ufZJ+j5ecpjLj3GCrNVYxt+Zzy26e83AZa4O4vy/51djgfRLhZpH8QDbbSwmquGPIouoBbDLOZWN1tlZFDxbgIaKj4f61Xt2/k1aa1dvSUSw1GrrtZDtb3b6PVchBFXItLcTjPgnV2ZUXl9m282rSWXatwdeU0Lp4ZavdvU2PT5peO3v3EPeDzMWJtkG0ZWJMWnj+c3umUzattJquDbKLVtPmc0c+ua6c6gvenRdtanOeCbVvRpjrGm4wLC/773QW8MhHxVuNquwj2ZNJVN62tLuKBFp/K7mioj7CxGGqKizwo+u9/VkNaW2u0prieyuiZ1e+h1fb0j4yLEgWGSynXcboTrZYaiV9k9NmbCJiKbRlCqftLgdsS9vZCu5nR2+v5XPlPVKx3upTbChPSZtSJVsvXs1AaqhObqQlxwSMyP+iRPTd4RciSwa+Q6Uur3ooI4mUyP+jBqmZfBBoe6ZO0Kt23UA92z6Ffl3XJqxFVnkPHRtxMkQTqedST6NmWuM++ttHq3Cm/J/a7Eq+uQ4mlGXZvpt5cRdPkr25VidKADiEGKd3imt6s0M30Sa4IyYxIkQpMffns+rPzTylEWfW2b1nrv2iSQNTszAacPzOx3BmdfX9x/toSmj9qAn3X0tD08wnmMQfolGJyUzt8JhgSp4e7SoXxxo0R7ExMYe8xUQFWD7/0mpRdnem+YDWvwSZieiqA2GpaXpsneE2reyt1kSaX1bxLoeFX4rq0wFbdre6slIt6Ve1cqli9StmJL1rEQb2ZFcIQxbp7de4f2eXTM3ywUqo53Q4tyhWoXX9Hpr6Rtmw94XJqjxffvscz1EbFgTvJ2XltcUVsdvTZHVP4XrWU1TNo8u2tePS6yeTMryw6durHb2IVvr/3poa/dEPnwMDAwF+IaZMZu4HMcfuenvEBQrdQ9wIK0zdzo3/QYSu8PiCyq/6yEO5Ud2Nw0eRNmSNEDgwMDAwMDPxj8c1ExkhEr/vNeUr3WyJ2P62Rl3bN9kD4j6NHjKZm9t6qA+R8bzrC9KhIzq0RIQhOn341Ue4P+EDC6ZAFsnfoAMc9z0fCHdMBH3EMcNrbdOy+E/YXhOT2B3FEfJe1djoldNTqiGzaGXTMfKPdGSby+Y/TQrv/igPOf4u0EMqqO5IYdzbL6oh3NlnlPk9LRqROxJ1O2ZxSWa84KeROe6IOKeF0Slzt9obs+r1QMDAw8JfithJPrksk0/pdZVmAtpcKMCUPzv4BIEiDSpsKBwHnBCH7I48mp0QvH3T677IxnCLAt0zi8tdiozjqmGAkRDULOV/wSYC2kkYXEdmJ6AP1XCGQQVknpGTSRiFAeAmRC+sRscgaaSB/l2lZ7DRo3+lVMpqyvLgQHAmunBc8JzWpkI0oQZQeGUNjRJF660nQQuuIsFUQc7YTuA4oZTIaWRLLa2Q7lzqlFZbrpKXVSFjBvfA6iUILJ5SUBIV0cD4ibiIEHbM0IYLmBiBHcdijmA9tvjkPoqLRsd+rW5AtBaBsZGEYM5JTg2zyWCkkkAKGDIcyB7Ki8gkKiimdryGZMDIeYSAUBEMsn8MUk9rrGm/Bg40NZrQCBwYGBgYGBv7f8T8QBjPjhSnZYAAAAABJRU5ErkJggg==" alt="no " />
                <h4 className='text-danger mt-3'>YOUR WISHLIST CART IS EMPTY</h4>
                <Link to={'/'}>
                  <button className='btn btn-success mt-3'><i className="fa-solid fa-arrow-left" me-2></i>BACK TO HOME</button>
                </Link>
              </div>
            </div>
        }

      </Row>
    </>
  )
}

export default Wishlist