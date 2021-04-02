import React,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'

export default function ProductScreen({match}) {
      const [product,setProduct]=useState([])
    useEffect(()=>{
        const fetchProduct=async()=>{
            const {data}=await axios.get(`http://localhost:5000/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()

    },[])
    return (
        <> 
          <Link className='btn btn-light my-3' to='/'>Go Back</Link>
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
          
        </>
    )
}
