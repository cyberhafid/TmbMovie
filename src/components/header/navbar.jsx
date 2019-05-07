import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';
import './navbar.css';


import Inscription from './login/inscription';
import Connex from './login/connex';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>


        <Navbar className="navbar navbar-expand-lg fond" expand="md">




          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink className='nav-link liennav' to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className='nav-link liennav' to="/ListMoviesHome">Premiere</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className='nav-link liennav' to="/ListMoviesHome">Premiere</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link liennav' to="/video">fiche youtuce</NavLink>
            </NavItem>


          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem className="margin-button" media="screen">
              <Connex
                buttonLabel='LOG IN'
              />
            </NavItem>

            <NavItem>

              <Inscription
                buttonLabel='SIGN IN'
              />
            </NavItem>
          </Nav>


        </Navbar>

      </div>
    );
  }
}