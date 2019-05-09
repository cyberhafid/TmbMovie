import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Commande from '../components/content/reservation/Commande';






export default class Reservation extends Component {
  render() {
    return (
   
   
   
        <div className="container-fluid backg">
         
          <Row>
                    <Col sm="10">
            <Commande/>
            </Col>
            <Col sm="2">
              <MenuCategorie />
            </Col>
          </Row>          
   
      </div>
    );
  }
}
