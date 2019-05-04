import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Premiere from './premiere';



export default class Home extends Component {
  render() {
    return (
      <div>
   
        <div className="container-fluid backg">
   
          <Row>
            <Col sm="3">
              <p>col1</p>
            </Col>
            <Col sm="6">
 <Premiere />
            </Col>
            <Col sm="3">
            <p>col3</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
