import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';



class App extends Component {
  render() {
    return (
  
        <div className="App">
              
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/premiere" component={Premiere} />

          </Switch>
       
        </div>

    );
  }
}

export default App;
