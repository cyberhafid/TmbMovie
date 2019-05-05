import React from 'react';
import axios from 'axios';
import Cardmovie from '../components/content/Card';



export default class Premiere extends React.Component {


  
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }





  

  render() {
    return (
      <div>
        { this.state.persons.map(person => 
        
        <Cardmovie Numfilm={person}/>
        
        )}
      </div>
    )
  }
}



