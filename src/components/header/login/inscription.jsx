import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
export default class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigned: false,
      modal: false,
      username: '',
      email: '',
      password: '',
      solde: '',
      mises: []
    };
    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange;
    this.submitForm = this.submitForm;
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
 
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/users';
    axios.post(url, this.state)
      .then((res) => {
        alert('Inscription réussie !');
        this.setState({ isSigned: true, modal: false });
      })
      .catch((err) => {
        alert('Erreur lors de l\'ajout d\'un membre ');
        console.log(err);
      });
 
  }

  render() {
    return (
      <div>
        <Button color="primary" className='modal-navbar' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>SIGN IN   ZONE</ModalHeader>
          <ModalBody>

            <Form onSubmit={(e) => this.submitForm(e)}>
              <FormGroup>
                <Label for="userName">Name</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your name"
                  onChange={(e) => this.onChange(e)}
                  value={this.state.username}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userMail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="userMail"
                  placeholder="Your pseudo"
                  onChange={(e) => this.onChange(e)}
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userPass">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="userPass"
                  placeholder="Your password"
                  onChange={(e) => this.onChange(e)}
                  value={this.state.pass}
                />
                <Input
                  type="hidden"
                  name="mises"
                  id="mises"
                  onChange={(e) => this.onChange(e)}
                  value={this.state.mises}
                />
              </FormGroup>
              <Button type="submit" color="primary" className="btn-nav" >SIGN IN</Button>

            </Form>

          </ModalBody>

        </Modal>
      </div>
    );
  }
}

