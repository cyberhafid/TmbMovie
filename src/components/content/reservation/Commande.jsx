import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'reactstrap';
import './commande.scss';
import { UserContext } from '../../tools/userProvider';
import CommandeFilm from './CommandeFilm';
export default class Commande extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      panier: [],
      versement: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserDatap();
 }


    fetchUserData() {
    axios.get(`http://localhost:3000/users/${this.context.id}`)
      .then(res => {
       const user = res.data;
        this.setState({
          user,

        });
      })
      .catch((err) => console.log(err));
  }

  fetchUserDatap() {
    axios.get(`http://localhost:3000/paniers`)
      .then(res => {
        
        const panier = res.data;
        this.setState({
         panier,
         

        });
      })
      .catch((err) => console.log(err));
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  submitForm(e) {
    e.preventDefault();
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ solde: this.context.solde + parseInt(this.state.versement) }),
    };
    const url = `http://localhost:3000/users/${this.context.id}`;

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert('please enter text value');
        } else {
          this.context.updateContextField('solde', this.context.solde + parseInt(this.state.versement));
          alert(` ${this.state.versement} $ Amount added in to your Wallet`);
          this.fetchUserData();
          //updateContextField = (solde;  this.context.solde + parseInt(this.state.versement));
          this.setState({ versement: '' });
        }
      }).catch(e => {
        console.error(e);
        alert('Your credit card will not be debited ');
      });
  }

  render() {
    console.log(this.state.panier);
    return (
      <React.Fragment>







        <Container>
          <div className="corps">
            <Row className="tab-title">
              <p><h2>Account</h2></p>
            </Row>
            <Row className="tab-sous-title">
              <Col>  E-Mail</Col>
              <Col>Portefeuille</Col>
            </Row>

            <Row className="tab-donnee">
              <Col> {this.state.user.email}</Col>
              <Col>{this.state.user.solde}</Col>
            </Row>
 
          </div>



          <div className="corps">
            <Row className="tab-title">
              <p><h2>commande  </h2></p>
            </Row>
            <Row className="tab-sous-title">
            <Col>Date</Col>
              <Col>  Telechargement  </Col>
              <Col>Montant total</Col>
            </Row>
            <Row className="tab-donnee">
              <Col> </Col>
              <Col></Col>
              <Col></Col>
            </Row>

            </div>


<CommandeFilm Afilm={this.state}/>




           <div className="corps">
            <Row className="tab-title">
              <p><h2>Account</h2></p>
            </Row>
            <Row className="tab-sous-title">
              <Col>  E-Mail</Col>
              <Col>.col</Col>
            </Row>

            <Form onSubmit={this.submitForm}>  <Row className="tab-donnee"> 
            <Col>Add Amount </Col>
              <Col>    <input type="texte" id="versement" name="versement" onChange={this.onChange} value={this.state.versement} placeholder="Amount" /></Col>
              <Button type="submit" value="Envoyer" >Submit</Button>
            </Row>  </Form>
 
          </div>


        </Container>

      </React.Fragment>

    );
  }
}

// GET /users => index [user1, user2, user3]
// GET /users/:id => show user1
// PUT /users/:id => update user1
// DELETE /users/:id => delete user1
// POST /users/create => create user