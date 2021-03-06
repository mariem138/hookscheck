import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Rating from './Rating';

function NavbarApp({ getSearch, getStar, star }) {
  return (
    <div>
      <Navbar bg="black" variant="black" >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
          
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search a movie" className="mr-sm-2" onChange={(e) => getSearch(e.target.value)} />
          <Rating getStar={getStar} star={star} />
        </Form>
      </Navbar>
    </div>
  )
}

export default NavbarApp;
