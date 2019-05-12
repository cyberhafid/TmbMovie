import React, { Component } from 'react'
import { Route,  Switch } from 'react-router-dom';

import Home from '../pages/home';
import ListMoviesHome from './content/List/ListMoviesHome';
import Fiche from './content/fiche/fiche';
import ListMoviesCat from './content/List/ListMoviesCat';
import Commande from './content/reservation/Commande';


export default class Routeur extends Component {
  render() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ListMovies" component={ListMoviesHome} />
        <Route path="/ListCat/:id" component={ListMoviesCat} />
        <Route path="/fiche/:id" component={Fiche} />
        <Route path="/commande" component={Commande} />

      </Switch>

    
    )
  }
}