import React from 'react'
import {Alert} from 'react-bootstrap'

export default function Message({variant,childern}) {
    return (
       <Alert variant={variant}>
       {childern}

       </Alert>
    )

}
    
