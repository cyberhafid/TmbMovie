import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'reactstrap';
import './commande.scss';
import { UserContext } from '../../tools/userProvider';
export default class Commande extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      favoris: [],
      versement: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.fetchUserData();

  }


    fetchUserData() {
    axios.get(`http://localhost:3000/users/${this.context.id}`)
      .then(res => {
        const favoris = res.data.favoris;
        const user = res.data;
        this.setState({
          favoris,
          user,

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

          <div className="corps">
            <Row className="tab-title">
              <p><h2>Article de la commande  en cours</h2></p>
            </Row>
            <Row className="tab-sous-title">
            <Col>Affiche</Col>
            <Col>Titre</Col>
            <Col>date</Col>
        
              <Col>Prix</Col>
            </Row>



            {this.state.favoris.map((mise, idx) => {
        
                  const { idFilm, startDate, titre, image, prix } = mise;
                


                  return (
                 
                  
                 
                    <Row className="tab-donnee" key={idx} >
                
                     
                      <Col>
                      <img width="100" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`} alt="alt" /> 
                       </Col>
                       <Link to={`/fiche/${idFilm}`}>   <Col>  
                       
                       
                      {titre}</Col>  </Link>
                       <Col>{startDate}</Col>

                      <Col>{prix}</Col>
                     
                    </Row>
                  );
                })
                }


<Row className="tab-sous-title">
            <Col> <Button type="submit" value="Envoyer" >Submit</Button></Col>
           
        
              <Col>Prix</Col>
            </Row>




           </div>





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