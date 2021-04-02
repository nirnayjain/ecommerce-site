import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
       <header>
         <>
        
           <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect style={{backgroundColor:'white'}}>
              <Container>
                <LinkContainer to="/">
    <Navbar.Brand >Shop India</Navbar.Brand>
    </LinkContainer>
     <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
       <LinkContainer to="/cart">
      <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
      </LinkContainer>
        <LinkContainer to="/login">
      <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
  
  </>
  
       </header>
    )
}

export default Header
