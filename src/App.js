import React, { Component } from 'react';
import { Route, BrowserRouter,  Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Premiere from './pages/premiere';
import MyNavbar from './components/header/navbar';



class App extends Component {
  render() {
    return (
  <BrowserRouter>
        <div className="App">
              < MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/premiere" component={Premiere} />

          </Switch>
       
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
