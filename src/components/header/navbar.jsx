import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';


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

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div>  <NavLink  className='nav-link' to="/">
  
            <p className="text-light title-nav">Cinema</p>
          </NavLink> </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <NavLink  className='nav-link' to="/"> Home </NavLink> <span class="sr-only">(current)</span>
              </li>
              <li class="nav-item">
               <NavLink className='nav-link' to="/premiere"> Premiere recup </NavLink>
              </li>
              <li class="nav-item">
                 <NavLink className='nav-link' to="/bet"> Bet </NavLink>
              </li>
              <li class="nav-item">
               <NavLink className='nav-link' to="/contact"> Contact </NavLink>
              </li>
     
            </ul>



          </div>
        </nav>

      </div>
    );
  }
}