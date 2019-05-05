import React from 'react';
import axios from 'axios';
import CardsList from '../components/content/List/CardsList';
import '../components/content/List/movie.css';



export default class ListMoviesHome extends React.Component {


  
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

  changeDiv(){

alert("alors ca marche")



  }



  

  render() {

    
    return (
     
    <div className="container mb-5">
        <div className="row d-flex flex-row py-5">

        { this.state.persons.map((person, index) => 

        <div  key= {index}>
        <CardsList Numfilm={person} changeDiv={()=>this.changeDiv(index)}/>
        </div>


        )}
      </div>
   </div>
    )
  }
}



