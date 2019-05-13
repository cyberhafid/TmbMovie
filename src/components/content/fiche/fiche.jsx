import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import './fiche.scss';
import axios from 'axios';
import { UserContext } from '../../tools/userProvider';
import FicheFilm from './ficheFilm';
import FicheVideos from './ficheVideos';


export default class Fiche extends React.Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {

      videos: [],
      user: {},
      panier: {},
     

    };

    this.AjouterFavoris = this.AjouterFavoris.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
    this.fetchUserData()
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.film) {
      this.fetchMovie();
      // this.fetchVideo();
    }
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,

    });
  }

  fetchUserData() {
    axios.get(`http://localhost:3000/`)
      .then(res => {
        const panierd = res.data.paniers;
        const user = res.data.users
        this.setState({
          panierd,
          user
        });
      })
      .catch((err) => console.log(err))
  }



  AjouterFavoris() {

    const panier = {
   
      "startDate": new Date(),
      "idFilm": this.state.film,
      "titre": this.state.title,
      "image": this.state.poster_path,
      "prix": this.state.vote_average
     
    };



 const url = `http://localhost:3000/paniers/`;
 axios.post(url, panier
  ).then(resp=> {
console.log(resp.data);
}).catch(error => {
console.log(error);
}); 



    this.context.updateUserProfile(this.context.id);
    alert(" Film bien ajouté a votre liste");

  };



  AjouterFavoris222() {

    const favori = {
      "startDate": new Date(),
      "idFilm": this.state.film,
      "titre": this.state.title,
      "image": this.state.poster_path,
      "prix": this.state.vote_average

    };
    let favoris = this.context.favoris;
    favoris.push(favori);
    
    const user = {
      panier: this.context.id,
      favoris: [...favoris]
    };

    const url = `http://localhost:3000/sales/`;
    axios.post(url, {user
  }).then(resp=> {
console.log(resp.data);
}).catch(error => {
console.log(error);
}); 



    this.context.updateUserProfile(this.context.id, user);
    alert(" Film bien ajouté a votre liste");

  };

  fetchMovie() {
    const filmId = this.props.match.params.id;

    axios.get(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then(res => {

        const popularity = res.data.popularity;
        const release_date = res.data.release_date;
        const genre_ids = res.data.genre_ids;
        const id = res.data.id;
        const overview = res.data.overview;
        const title = res.data.title;
        const vote_average = res.data.vote_average;
        const poster_path = res.data.poster_path;
        //console.log(persons);
        this.setState({
          id,
          overview,
          title,
          genre_ids,
          release_date,
          popularity,
          vote_average,
          poster_path,
          film: filmId

        });
      })


    axios.get(`https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

      .then(res => {
        const videos = res.data.results;

        this.setState({
          videos
        });
      })


  }

  render() {
    console.log(this.state.videos);
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col >
              <div className="blocfiche">
                <FicheFilm Idvideo={this.state} AjouterFavoris={() => this.AjouterFavoris()} />
              </div>

              <div className="blocfiche">
                <FicheVideos Idvideo={this.state} />
              </div>

            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

