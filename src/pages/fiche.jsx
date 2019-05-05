import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './fiche.css';
import axios from 'axios';




export default class Fiche extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      videos: []
    };
  }

  componentDidMount() {
    this.fetchMovie();
   // this.fetchVideo();
  }

  componentDidUpdate(){
    if(this.props.match.params.id !== this.state.film){
      this.fetchMovie();
     // this.fetchVideo();
    }
  }

  fetchMovie() {
    const filmId = this.props.match.params.id;
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const persons = res.data.results;
        this.setState({
          persons,
          film: filmId

        });
      })

      axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  
      .then(res => {
          const videos = res.data.results;
          console.log(videos) ;
          this.setState({
            videos
          });
        })





  }



  render() {

    return (

<Container>

        {this.state.persons.filter((person, idx) => person.id == this.state.film).map((person, index) =>

          <Row key={index}>
            <Col sm="8">
              <Row>
                <Col sm="12" >
                  <div >

                    <img width="400px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${person.poster_path}`} alt="att" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="4" >

                  <img width="100px" src="https://source.unsplash.com/W1yjvf5idqA" alt="img" />
                </Col>
                <Col sm="4" >

                  <img width="100px" src="https://source.unsplash.com/VgbUxvW3gS4" alt="img" />
                </Col>
                <Col sm="4" >
                  <img width="100px" src="https://source.unsplash.com/5WbYFH0kf_8" alt="img" />

                </Col>
              </Row>

            </Col>



            <Col sm="4">

              <Row>
                <Col sm="12" >
                  <h1>{person.title}</h1>
                  <h2>$19.99</h2>
                  <div >
                    <p>id: {person.id}</p>
                    <p>vote_count: {person.vote_count}</p>
                    <p>vote_average: {person.vote_average}</p>
                    <p>popularity: {person.popularity}</p>
                    <p>release_date: {person.release_date}</p>

                    <p>overview: {person.overview}</p>


                  </div>
                  <button >Add To Cart</button>
                </Col>
              </Row>
            </Col>

          </Row>
        )}


<Row>
<Col sm="12" >
  <h1>encours</h1>
  {this.state.videos.map((video) =>
 

<div className="embed-responsive embed-responsive-16by9">
<iframe style={{ height: 100 }} className="embed-responsive-item" src={`youtube.com/watch?v=${video.key}`} allowfullscreen></iframe>
</div>



    )}

  
</Col>
</Row>






      </Container>
    );
  }
}



/*  { this.state.persons.filter((person, idx) => person.id === 299534 ).map((person, index) =>*/