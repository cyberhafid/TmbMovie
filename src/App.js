import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import MyNavbar from './components/header/navbar';
import Footer from './components/footer/pied';
import ListMoviesHome from './pages/ListMoviesHome';
import Fiche from './pages/fiche';
import Video from './pages/video';





class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">

          < MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ListMoviesHome" component={ListMoviesHome} />
            <Route path="/fiche/:id" component={Fiche} />
            <Route path="/video" component={Video} />

          </Switch>
          < Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
