import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <div className="d-flex justify-content-center align-items-center bg-primary" style={{height:'250px',width:'100%'}}>
        <div className="d-flex justify-content-center align-items-evenly">
                        
                       {/* first div */}
                        <div className='overview' style={{width:'300px'}}>
                                <Link style={{textDecoration:'none'}} to={'/'}> 
                                    <i class="fa-solid fa-cart-shopping fa-bounce me-3 text-warning"></i>   
                                    <span style={{color:'white',fontWeight:'700'}}> ECART</span>
                                </Link>
                                <p style={{color:'white', textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, modi doloribus? Neque, corporis dolore ea rem praesentium ducimus recusandae, est tempore ullam reiciendis ex obcaecati odit saepe fuga veritatis illo.</p>
                        </div>
                       {/* second div */}
                        <div className='links d-flex flex-column ms-5  'style={{color:'white'}}>
                            <h4 >LINKS</h4>
                            <Link className='ms-2' to={'/'} style={{textDecoration:'none',color:'white'}}>HOME</Link>
                            <Link className='ms-2' to={'/home'}style={{textDecoration:'none',color:'white'}}>CART</Link>
                            <Link className='ms-2' to={'/watch'}style={{textDecoration:'none',color:'white'}}>WISH LIST</Link>
                        </div>

                        {/* third div */}
                                    <div  className='links d-flex flex-column ms-5  'style={{color:'white'}}>
                                        <h2 >GUIDES</h2>
                                        <h5>React</h5>
                                        <h5>Reactboostrap</h5>
                                        <h5>Font awesome</h5>
                                    </div>

                        {/* forth div */}
                                    <div className='contact_us ms-5' style={{color:'white'}}>
                                            <h4>CONTACT US</h4>
                                            <div className='d-flex'>
                                                <input type="text" name='' placeholder='Enter Your Email' className='form-control rounded' />
                                                <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
                                            </div>

                                            <div className='d-flex justify-content-evenly align-items-center mt-3 '>
                                                <i class="fa-brands fa-whatsapp fa-2x"></i>
                                                <i class="fa-brands fa-instagram fa-2x"></i>
                                                <i class="fa-brands fa-twitter fa-2x"></i>
                                                <i class="fa-brands fa-facebook-f fa-2x"></i>    
                                            </div>
                                    </div>
        </div>
     </div>
    </>
   
  )
}

export default Footer