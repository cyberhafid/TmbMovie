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
import { userContextData, UserProvider } from './components/tools/userProvider';
import Axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...userContextData,
      updateContextField: this.updateContextField,
      updateUserProfile: this.updateUserProfile
    };
  }

  updateContextField = (field, value) => {
    this.setState({ [field]: value });
  }

  updateUserProfile = (userId, datas) => {
    Axios.patch(`http://localhost:3000/users/${userId}`, datas)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }


  render() {
    return (
      <BrowserRouter>
      <UserProvider value={this.state}>
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
      
      </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
