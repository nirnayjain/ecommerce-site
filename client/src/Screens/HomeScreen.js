import React,{useState,useEffect} from 'react'
import products from '../products'
import{Row,Col} from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'

export default function HomeScreen() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProducts=async()=>{
            const {data}=await axios.get('http://localhost:5000/api/products')
            setProducts(data)
        }
        fetchProducts()

    },[])
    return (
        <>
            <h2>Latest Products</h2>
            <Row>
                {products.map(product=>(
                    <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} /></Col>
                ))}
            </Row>
        </>
    )
}
