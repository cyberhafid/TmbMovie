import React, { Component } from 'react';
import { Route, BrowserRouter,  Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Deuxieme from './pages/deuxieme';
import MyNavbar from './components/header/navbar';
import Footer from './components/footer/pied';
import ListMoviesHome from './pages/ListMoviesHome';
import Test from './pages/test';
import Fiche from './pages/fiche';





class App extends Component {
  render() {

    return (
  <BrowserRouter>
        <div className="App">

              < MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ListMoviesHome" component={ListMoviesHome} />
            <Route path="/fiche:id" component={Fiche} />
            <Route path="/deuxieme" component={Deuxieme} />
            <Route path="/test" component={Test} />
          </Switch>
          < Footer />
       
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
