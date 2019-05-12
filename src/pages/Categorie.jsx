import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MenuCategorie from '../components/content/menu/MenuCategorie';
import ListMoviesCat from '../components/content/List/ListMoviesCat';





export default class Categorie extends Component {
  render() {
    return (
   
   
   
        <div className="container-fluid backg">
         
        
            <ListMoviesCat/>
           
   
      </div>
    );
  }
}
