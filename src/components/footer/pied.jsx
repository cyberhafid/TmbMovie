import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';


export default class Footer extends Component {
  render() {
    return (


      <div style={{ backgroundColor: '#333', borderColor: '#333' }}>
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