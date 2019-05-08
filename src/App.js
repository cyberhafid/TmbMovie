import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MyNavbar from './components/header/navbar';
import Footer from './components/footer/pied';
import ListMoviesHome from './components/content/List/ListMoviesHome';
import Fiche from './components/content/fiche/fiche';
import ListMoviesCat from './components/content/List/ListMoviesCat';
import Commande from './components/content/reservation/Commande';





class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">

          < MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ListMovies" component={ListMoviesHome} />
            <Route path="/ListCat/:id" component={ListMoviesCat} />
            <Route path="/fiche/:id" component={Fiche} />
            <Route path="/commande" component={Commande} />

          </Switch>
          < Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
