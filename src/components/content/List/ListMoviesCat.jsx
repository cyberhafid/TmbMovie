import React from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import CardsList from '../card/CardsList';


export default class ListMoviesCat extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      persons: []
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }
 
  componentDidUpdate() {
 if (this.props.match.params.id !== this.state.categ) {
        this.fetchMovies();
  }
  }

  fetchMovies() {
    const catId =  this.props.match.params.id;
 
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_count.desc&with_genres=${catId}`)
      .then(res => {
        const persons = res.data.results;
        console.log(persons)
        this.setState({
           persons,
         categ: catId
          });
      })
  }
  render() {


    return (
      <React.Fragment>
      <div >
        <div className="row d-flex flex-row py-5 ">

          {this.state.persons.map((person, index) =>

            <div key={index}>

              <Link className='nav-link' to={`/fiche/${person.id}`}>
                <CardsList Numfilm={person} />
              </Link>
            </div>


          )}
        </div>
      </div>
      </React.Fragment>
    )
  }
}



