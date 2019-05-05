import React from 'react';
import axios from 'axios';
import CardsList from '../components/content/List/CardsList';
import '../components/content/List/movie.css';



export default class ListMoviesHome extends React.Component {

constructor(props) {
  super(props)

  this.state = {
    persons: [],
    className : 'simonsmith',
    index:''

  }
}



  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
     
      })
  }



  changeDiv(index){

//alert("ee")
if(index==this.state.index){
this.setState({className:"overlay"});
alert(index)
}
  }


  

  render() {

  
    return (
     
    <div className="container mb-5">
        <div className="row d-flex flex-row py-5">

        { this.state.persons.map((person, index) => 

        <div  key= {index}>
    <div className="container">
  <img    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${person.poster_path}`}/>
  
  
  <div className="overlay" >
    <div className="text" >Hello World className="{this.state.className}"</div>
  </div>


</div>

        </div>


        )}
      </div>
   </div>
    )
  }
}



