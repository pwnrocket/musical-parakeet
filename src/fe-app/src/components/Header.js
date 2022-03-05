import React from 'react';
import {Nav, NavItem, Container} from 'reactstrap'; 
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <Container>
      <Nav>
        <NavItem>
        <Link className="btn btn-primary" to="/AddUser">Add User</Link>
        </NavItem>
      </Nav>
    </Container>
  )
}
