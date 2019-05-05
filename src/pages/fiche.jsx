import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import './fiche.css';
import axios from 'axios';




export default class Fiche extends Component {

    constructor(props) {
      super(props);
      this.state = {
        persons: []
      };
    }
  


  componentDidMount() {
 this.fetchMovie();
  }

fetchMovie(){
  const filmId = this.props.match.params.id;
  axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
  .then(res => {
    const persons = res.data.results;
    this.setState({ 
      persons,
      film: filmId
    
    });
  })


}

  render() {

    return (


      <Container>
    
    { this.state.persons.filter((person, idx) => person.id == '299534' ).map((person, index) => 

          <Row  key= {index}>
          <Col sm="8">
            <Row>
              <Col sm="12" >
                <div >

                  <img width="400px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${person.backdrop_path}`} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm="4" >

                <img width="100px" src="https://source.unsplash.com/W1yjvf5idqA" />
              </Col>
              <Col sm="4" >

                <img width="100px" src="https://source.unsplash.com/VgbUxvW3gS4" />
              </Col>
              <Col sm="4" >
                <img width="100px" src="https://source.unsplash.com/5WbYFH0kf_8" />

              </Col>
            </Row>

            </Col>



            <Col sm="4">

              <Row>
                <Col sm="12" >
                  <h1>{person.id}</h1>
                  <h2>$19.99</h2>
                  <div >
                    <p> {person.id}</p>
                   
                  </div>
                  <button class="add-to-cart">Add To Cart</button>
                </Col>
              </Row>
            </Col>

          </Row>

)}

        </Container>
        );
      }
    }
    
    
    
