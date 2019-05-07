import React from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import './fiche.scss';

import axios from 'axios';
import MenuCategorie from '../components/content/menu/MenuCategorie';



const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, onChange, value }) => {
  return (
    <div className='rating'>
      {
        range(min, max).map(item => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </div>
  )
}













export default class Fiche extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      videos: [],

    };
  }

  componentDidMount() {
    this.fetchMovie();
    // this.fetchVideo();
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.film) {
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
        console.log(videos);
        this.setState({
          videos
        });
      })
  }

  render() {

    return (
      <React.Fragment>
        <Container>

   
        <Row>
                    <Col sm="10">


          <Row>
            <div className="search-bar">
              <input
                value="term"
                placeholder='Search Video' />
            </div>
          </Row>








          {this.state.persons.filter((film) => film.id == this.state.film).map((film, idx) =>
            <Row>

              <Col sm="3" >
                <img width="200px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${film.poster_path}`} alt="alt" />

              </Col>
              <Col sm="9" >
                <Row>
                  <Col sm="10" className="film-title"  >
                    {film.title}
                  </Col>
                  <Col sm="2" >
                    <Rating
                      min={1}
                      max={10}
                      onChange={(rating) => this.setState({ rating })}
                      value={film.vote_average}
                    />

                  </Col>
                </Row>

                
                <Row className="film-synopsis" >
                  {film.overview}
                </Row>
                <Row  className="footermiddle" >
                  <Col sm="8"  >
                  <Row>
                    <span>genre film vote_average: {film.genre_ids}</span>
                    <span>date sortie film : {film.release_date}</span>  </Row>
                  </Col>
                  <Col sm="4" >
                  <Row>
                  <span>Origine : {film.popularity}</span>  </Row>
                  </Col>
                </Row>

              </Col>
            </Row>
          )}















          <Row>
            <Col md="8">
              {this.state.videos.filter((video, idx) => idx < 1).map((video, idx) =>

                <div className="video-detail" key={idx}>
                  <h1>{video.title}</h1>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.key}`} ></iframe>
                  </div>

                </div>

              )}
            </Col>


            <Col md="4">
              <div className="video-detail ">
                <ul className="list-group">

                  {this.state.videos.filter((video, idx) => idx > 1 && idx <= 4).map((bande, idx) =>

                    <li className="list-group-item" key={idx}>

                      <li className="list-group-item" >
                        <div className="video-list media">
                          <div className="media-left">

                          </div>
                          <div className="media-body">

                            <div className="embed-responsive embed-responsive-16by9">
                              <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${bande.key}`} ></iframe>
                            </div>
                            <div className="media-heading">title</div>
                          </div>
                        </div>
                      </li>
                    </li>

                  )
                  }
                </ul>
              </div>

            </Col>
          </Row>

          <Row>

            <Col sm="12" >

              <button >state{this.state.film}</button>
            </Col>
          </Row>


          </Col>
   
      
                    <Col sm="2">

<MenuCategorie />
                    </Col>
          </Row>

        </Container>
      </React.Fragment>
    );
  }
}

