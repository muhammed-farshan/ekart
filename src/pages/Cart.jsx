import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux'
import { emptyCart, removeItemFromCart } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector(state => state.cartItems)
  console.log("cartarray");
  console.log(cartArray);
 const dispatch = useDispatch()
 const [total,setTotal] = useState(0)
 const navigate = useNavigate()
 const getTotal = ()=>{
  let sum = 0
  cartArray.forEach((item)=>{
    sum = sum + item.price
  })
  setTotal(sum)
 }
 useEffect(()=>{
  getTotal();
 },[cartArray])

 const checkout = () => {
  alert("your order is successfully placed!..")
  dispatch(emptyCart())
  navigate('/')
 }

  return (
    <>
      <div style={{ marginTop: '100px' }} className='container mb-5'>
        {
          cartArray.length > 0 ?
            <div className='row w-100'>
              <div className='col-md-6 col-lg-6'>
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Protect</th>
                      <th>image</th>
                      <th>price</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item,index) => (
                        <tr>
                          <td>{index+1}</td>
                          <td>{item.title}</td>
                          <td><img src={item.image} alt="no" height={'30px'} /></td>
                          <td> &#x20B9;{item.price}</td>
                          <td>
                            <Button variant='outline-danger' onClick={()=>dispatch(removeItemFromCart(item.id))}> <i className='fa-solid fa-trash '></i></Button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='col-md-4 col-lg-4'>
                    <div className=' border shadow p-3 ms-4 mb-4'>
                      <h3>CART SUMMARY</h3>
                      <h5>Total Number Of Products: <span className='fw-bolder text-warning'>{cartArray.length}</span></h5>
                      <h5>Total Price: <span className='text-danger'>&#x20B9;{total}</span></h5>
                      <button className='btn btn-success rounded w-100 p-2' onClick={checkout}> CHECKOUT</button>
                    </div>
              </div>
            </div > :
             <div style={{ height: '40vh' }}>
             <div className='d-flex justify-content-center align-items-center flex-column'>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAS1BMVEX////y8vL29vb8/Pz5+fnQ0NDk5OTp6enIyMju7u7f39/b29vNzc3X19fT09PFxcW+vr61tbWsq6yioqKWlZaNi4ydm5yCgIF8eXuDwuPjAAAGGUlEQVR4nO1b6YLyKhJlLfbNbeb9n3QgLm0SsPUL6nfvcH7YHZOQY1VRGwShgYGBgYGBgYGBZ6HotxlUYcm3GVSgZJT62yRqkPjbDKrQ7NsMBgb+zWDfn/iUUsYW3lr573C5PF0AaG2c59ZY7m5OyMhovycvwX9gGBPhGkmo4PR7QRjsmZJ3xkxatHA5Q2B5LRUfo0UFCEwYLSgmlmNcMyPA8tPio4zgCYTqdkLw4RTmymmCkL9en+ctybcIMM5K/6aJQfEckTV0RRkWWuc5m2FttkYtBGYivoUXWbAiXpOrmziLRYF23MogJTcaVDZFdj9Jye/i3c4KYyWxEEIb78sstWWSlmnRNvfQP+NakcKYRcm9BqHIQixNWtM11vRjxSq0CH/RWEL5wDF2Y7W09jMt/drvxnz6Y/pVGjVhPeUi7gHdK58qK0zCS97cqQ/Rcqtw+AjdQ1LVtHBxEa+MEjqzqvisi7ja4Trbo5ufZJ+j5ecpjLj3GCrNVYxt+Zzy26e83AZa4O4vy/51djgfRLhZpH8QDbbSwmquGPIouoBbDLOZWN1tlZFDxbgIaKj4f61Xt2/k1aa1dvSUSw1GrrtZDtb3b6PVchBFXItLcTjPgnV2ZUXl9m282rSWXatwdeU0Lp4ZavdvU2PT5peO3v3EPeDzMWJtkG0ZWJMWnj+c3umUzattJquDbKLVtPmc0c+ua6c6gvenRdtanOeCbVvRpjrGm4wLC/773QW8MhHxVuNquwj2ZNJVN62tLuKBFp/K7mioj7CxGGqKizwo+u9/VkNaW2u0prieyuiZ1e+h1fb0j4yLEgWGSynXcboTrZYaiV9k9NmbCJiKbRlCqftLgdsS9vZCu5nR2+v5XPlPVKx3upTbChPSZtSJVsvXs1AaqhObqQlxwSMyP+iRPTd4RciSwa+Q6Uur3ooI4mUyP+jBqmZfBBoe6ZO0Kt23UA92z6Ffl3XJqxFVnkPHRtxMkQTqedST6NmWuM++ttHq3Cm/J/a7Eq+uQ4mlGXZvpt5cRdPkr25VidKADiEGKd3imt6s0M30Sa4IyYxIkQpMffns+rPzTylEWfW2b1nrv2iSQNTszAacPzOx3BmdfX9x/toSmj9qAn3X0tD08wnmMQfolGJyUzt8JhgSp4e7SoXxxo0R7ExMYe8xUQFWD7/0mpRdnem+YDWvwSZieiqA2GpaXpsneE2reyt1kSaX1bxLoeFX4rq0wFbdre6slIt6Ve1cqli9StmJL1rEQb2ZFcIQxbp7de4f2eXTM3ywUqo53Q4tyhWoXX9Hpr6Rtmw94XJqjxffvscz1EbFgTvJ2XltcUVsdvTZHVP4XrWU1TNo8u2tePS6yeTMryw6durHb2IVvr/3poa/dEPnwMDAwF+IaZMZu4HMcfuenvEBQrdQ9wIK0zdzo3/QYSu8PiCyq/6yEO5Ud2Nw0eRNmSNEDgwMDAwMDPxj8c1ExkhEr/vNeUr3WyJ2P62Rl3bN9kD4j6NHjKZm9t6qA+R8bzrC9KhIzq0RIQhOn341Ue4P+EDC6ZAFsnfoAMc9z0fCHdMBH3EMcNrbdOy+E/YXhOT2B3FEfJe1djoldNTqiGzaGXTMfKPdGSby+Y/TQrv/igPOf4u0EMqqO5IYdzbL6oh3NlnlPk9LRqROxJ1O2ZxSWa84KeROe6IOKeF0Slzt9obs+r1QMDAw8JfithJPrksk0/pdZVmAtpcKMCUPzv4BIEiDSpsKBwHnBCH7I48mp0QvH3T677IxnCLAt0zi8tdiozjqmGAkRDULOV/wSYC2kkYXEdmJ6AP1XCGQQVknpGTSRiFAeAmRC+sRscgaaSB/l2lZ7DRo3+lVMpqyvLgQHAmunBc8JzWpkI0oQZQeGUNjRJF660nQQuuIsFUQc7YTuA4oZTIaWRLLa2Q7lzqlFZbrpKXVSFjBvfA6iUILJ5SUBIV0cD4ibiIEHbM0IYLmBiBHcdijmA9tvjkPoqLRsd+rW5AtBaBsZGEYM5JTg2zyWCkkkAKGDIcyB7Ki8gkKiimdryGZMDIeYSAUBEMsn8MUk9rrGm/Bg40NZrQCBwYGBgYGBv7f8T8QBjPjhSnZYAAAAABJRU5ErkJggg==" alt="no " />
               <h4 className='text-danger mt-3'>YOUR CART IS EMPTY</h4>
               <Link to={'/'}>
                 <button className='btn btn-success mt-3'><i className="fa-solid fa-arrow-left" me-2></i>BACK TO HOME</button>
               </Link>
             </div>
           </div>
        }
      </div>
    </>
  )
}

export default Cart