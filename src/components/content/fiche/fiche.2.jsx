import React from 'react';
import { Row, Col, Container, Button, Media } from 'reactstrap';
import './fiche.scss';

import axios from 'axios';
import MenuCategorie from '../menu/MenuCategorie';

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
      mises: [],
      versement: '',
      solde: 0

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




  AjouterFavoris() {


    this.state.mises.push({
      "startDate": new Date(),
      "idfilm": this.state.film,

    })

    this.state.user.mises = this.state.mises
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.user),
    };
    const url = `http://localhost:3000/users/${this.context.id}/`;
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert('le champ panier doit etre non vide');
        } else {
          alert(`Montant enregistré sous le numero ${res}!`);
          //this.fetchUserData();
        }
      }).catch(e => {
        console.error(e);
        alert('Votre CB ne sera pas debité ');
      });
  }


  fetchUserData() {
    axios.get(`http://localhost:3000/users/${this.context.id}`)
      .then(res => {
        const mises = res.data.mises;
        const user = res.data;
        this.setState({
          mises,
          user
        });
      })
      .catch((err) => console.log(err))
  }



  AjouterOK() {

   

    const mise = {

        "startDate": "2015-10-07",
          "idmatch": this.state.film,
          "versement": "22222",
          "pari": "11111"

          };
          let mises = this.context.mises;
          mises.push(mise);
          const user = {
            email: this.context.email,
            solde: "222",
            mises: [...mises]
          };

          this.context.updateUserProfile(this.context.id, user);
     

      }




  AjouterFavoris222() {

    const url = `http://localhost:3000/users/3`;

    const users = {
      mises: ['pid1234', 'pid1235']
    };

    axios.put(url, {
      mises: ['pid1234', 'pid1235']
    }).then(resp => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }










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
            <Col sm="10">


          


              <div className="blocfiche">
              <FicheFilm Idvideo={this.state} AjouterFavoris={() => this.AjouterFavoris()} />
              </div>

              <div className="blocfiche">
              <FicheVideos Idvideo={this.state} />
              </div>


              <div className="blocfiche">
                <Row>
                  <Col sm="12" >
                    <button >state{this.state.film}</button>
                  </Col>
                </Row>
              </div>



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

