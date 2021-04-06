import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import {listProducts} from '../actions/productAction'
import Message from '../Components/message'
import Loader from '../Components/loader'

export default function HomeScreen() {
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList
    
    useEffect(()=>{
       dispatch(listProducts())
    },[dispatch])
 
    return (
        <>
            <h2>Latest Products</h2>
            {loading?<Loader /> :error?<Message variant='danger'>{error}</Message>:
            <Row>
                {products.map(product=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} /></Col>
                ))}
            </Row>
            }
        </>
    )
}
