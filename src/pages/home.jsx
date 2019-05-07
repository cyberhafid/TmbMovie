import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MenuCategorie from '../components/content/menu/MenuCategorie';
import ListMoviesHome from './ListMoviesHome';




export default class Home extends Component {
  render() {
    return (
   
   
   
        <div className="container-fluid backg">
         
          <Row>
                    <Col sm="10">
            <ListMoviesHome />
            </Col>
            <Col sm="2">
              <MenuCategorie />
            </Col>
          </Row>          
   
      </div>
    );
  }
}
