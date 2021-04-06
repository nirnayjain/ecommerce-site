import React,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {listProductDetails} from '../actions/productAction'
import Message from '../Components/message'
import Loader from '../Components/loader'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../Components/Rating'


export default function ProductScreen({match}) {
    const dispatch=useDispatch()
    const productDetails=useSelector(state=>state.productDetails)
    const{loading,error,product}=productDetails
    
     
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
      

    },[dispatch])
    return (
        <> 
          <Link className='btn btn-light my-3' to='/'>Go Back</Link>
          {loading?<Loader /> :error?<Message variant='danger'>{error}</Message>:
          <Row>
              <Col md={6}>
                   <Image src={product.image} rounded fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}  </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                         <ListGroup.Item>
                            Description:{product.description }
                        </ListGroup.Item>
                   </ListGroup>
               </Col>
               <Col md={3}>
                             
                                <ListGroup>
                                <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price : </Col>
                                    <Col>
                                    ${product.price}</Col>
                                </Row>
                                </ListGroup.Item>
             
                                <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:</Col>
                                    <Col>
                                    {product.countInStock>0?'In Stock':'Out of Stock'}
                                    </Col>
                                </Row>
                                </ListGroup.Item>
                              
                                   
                               
                                </ListGroup>
                                
                                <Button type='button'className="my-3" disabled={product.countInStock===0 } variant="dark">Add To Cart</Button>
                                
                         
                  
               </Col>
          </Row>
}
        </>
    )
}
