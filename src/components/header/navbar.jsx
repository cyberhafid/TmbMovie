import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {

  Nav,
  NavItem
} from 'reactstrap';
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

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div>  <NavLink  className='nav-link' to="/">
  
            <p className="text-light title-nav">Cinema</p>
          </NavLink> </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <NavLink  className='nav-link' to="/"> Home </NavLink> <span class="sr-only">(current)</span>
              </li>
              <li className="nav-item">
               <NavLink className='nav-link' to="/ListMoviesHome"> Premiere LISTE </NavLink>
              </li>
              <li className="nav-item">
                 <NavLink className='nav-link' to="/deuxieme"> Deuxieme </NavLink>
              </li>
              <li className="nav-item">
               <NavLink className='nav-link' to="/test"> Game </NavLink>
             
             
             </li>
     
            </ul>

            <Nav className="ml-auto" navbar>
                        <NavItem className="margin-button" media="screen">
                          <Connex
                            buttonLabel='LOG IN'
                          />
                        </NavItem>
                        <NavItem id="homeAnchor" className="pointer">
          <span className="nav-link">
            <FontAwesomeIcon icon="home" /> Home
          </span>
        </NavItem>
        <NavItem
         
        >
          <span className="nav-link">
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </span>
        </NavItem>
                        <NavItem>

                          <Inscription
                            buttonLabel='SIGN IN'
                          />
                        </NavItem>
                      </Nav>

          </div>
        </nav>

      </div>
    );
  }
}