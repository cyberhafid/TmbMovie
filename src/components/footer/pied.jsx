import React, { Component } from 'react';
import '../../App.css';
import  { Row, Col , Container} from 'reactstrap';


    export default class Footer extends Component {
    render () {
      return (

   
          <Container  style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <Row>
              {/* Grid column */}
              <Col md="12">
                <div className="mb-5 flex-center">
                  {/* Facebook */}
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/* Twitter */}
                  <a className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/* Google +*/}
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/*Linkedin */}
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/*Instagram*/}
                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  {/*Pinterest*/}
                  <a className="pin-ic">
                    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
          
              </Col>
           
            </Row>
     
<Row>       <div >© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
          </div></Row>


          </Container>
      
  
      );
    }
  }