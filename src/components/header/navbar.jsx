import React from 'react';
import {Collapse, Navbar, NavbarToggler, Nav,  NavItem} from 'reactstrap';

import './navbar.scss';
import ActiveUser from './activeUser';
import { UserConsumer } from '../tools/userProvider';
import { NavLink,Link, withRouter } from 'react-router-dom';
import Inscription from './login/inscription';
import Connex from './login/connex';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthentified: false,
      email: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const className = !this.state.isAuthentified ? 'toShow' : 'toHide';
    return (
      <div className="container-fluid backg">


             <Navbar className="navbar navbar-expand-lg fond" expand="md">

             <Nav className="ml-auto" navbar>

             <NavItem>
              <NavLink className='nav-link liennav' to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className='nav-link liennav' to="/Commande">Commande</NavLink>
            </NavItem>

            </Nav>
            <Nav className="ml-auto" navbar>


          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <UserConsumer>
              {
                context => {
                  if (context.isAuthentified) {
                    return (
                      <Link to="/commande"><span className='text-light' style={{ marginLeft: '35px' }}>`Bonjour {context.email}`</span></Link>
                    );
                  } else {
                    return (
                      <Nav className="ml-auto" navbar>
                        <NavItem className="margin-button" media="screen">
                          <Connex className="margin-button"
                            buttonLabel='LOG IN'
                          />
                        </NavItem>
                        <NavItem>

                          <Inscription
                            buttonLabel='SIGN IN'
                          />
                        </NavItem>
                      </Nav>
                    );
                  }
                }
              }
            </UserConsumer>
          </Collapse>
          <ActiveUser
            className={className}
            activeUser={this.state.email}
          />
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MyNavbar);



