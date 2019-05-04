import React from 'react';
import axios from 'axios';



export default class Premiere extends React.Component {


  
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then(res => {
        const persons = res.data.production_companies;
        this.setState({ persons });
      })
  }





  

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.id}</li>)}
      </ul>
    )
  }
}



