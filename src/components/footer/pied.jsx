import React, { Component } from 'react';
import '../header/navbar.scss';
import { Row, Col } from 'reactstrap';


export default class Footer extends Component {
  render() {
    return (

      <div className="container-fluid backg fond">

        <Row>
          {/* Grid column */}
          <Col md="12">
            <div className="mb-5 flex-center">

            </div>

          </Col>

        </Row>

        <Row>       <div >© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
        </div></Row>


      </div>


    );
  }
}