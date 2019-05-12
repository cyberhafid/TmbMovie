import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ListMoviesHome from '../components/content/List/ListMoviesHome';
import MenuCategorie from '../components/content/menu/MenuCategorie';







export default class Home extends Component {
  render() {
    return (
   
   
   
        <div className="container-fluid backg">
           
       
            <ListMoviesHome/>
                   
   
      </div>
    );
  }
}
