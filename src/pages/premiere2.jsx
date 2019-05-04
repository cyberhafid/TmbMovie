import React from 'react';
import axios from 'axios';



export default class Premiere extends React.Component {



    state = {
      movies: []
    };
  
    async componentDidMount() {
      const { data: movies } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6a850d0c55306e71a8222a58f64f3e11"
      );
      this.setState({ movies: movies.results });
    }
  
    render() {
      console.log(this.state.movies);
      return (
        <div className="container">
          {this.state.movies.map(movie => <h1 key={movie.id}>{movie.title}</h1>)}
        </div>
      );
    }
  }

