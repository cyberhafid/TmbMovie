import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { Row, Col } from 'reactstrap';
import MyNavbar from './components/header/navbar';
import Footer from './components/footer/pied';

import { userContextData, UserProvider } from './components/tools/userProvider';
import Axios from 'axios';
import Routeur from './components/Routeur';
import MenuCategorie from './components/content/menu/MenuCategorie';



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


   
         
         <Row>
         
           <Col sm="10">
           <Routeur />
           </Col>
           <Col sm="2">
             <MenuCategorie />
           </Col>
         </Row>
       
   
          < Footer />

        </div>
      
      </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
