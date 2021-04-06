import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loader() {
    return (
        <Spinner
        animation="border"
        role="status"
        style={{
            width:'50px',
            height:"50px",
            margin:"auto",
            display:'block'
        }}
        
        
        
        >
            <span class='sr-only'>Loading</span>
        </Spinner>
    )
}
