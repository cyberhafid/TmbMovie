import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { UserContext } from '../../tools/userProvider';
import axios from 'axios';
export default class Connex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigned: false,
      modal: false,
      isAuthentified: false,
      email: 'cyberhafid@gmail.com',
      password: '123',
      mises: null,
      solde: ''
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
    const url = 'http://localhost:3000/users/';
    axios.get(url)
      .then((res) => {
        const emails = res.data.map((user) => user.email.toLowerCase());
      
        if (emails.includes(this.state.email.toLowerCase())) {
          const index = emails.indexOf(this.state.email.toLowerCase());
          if (res.data[index].password.toString() === this.state.password.toLowerCase()) {
            this.setState({ isAuthentified: true });
            this.context.updateContextField('email', res.data[index].email);
            this.context.updateContextField('isAuthentified', true);
            this.context.updateContextField('solde', res.data[index].solde);
            this.context.updateContextField('mises', res.data[index].mises);
            this.context.updateContextField('id', res.data[index].id);
          }
        }
      })
      .catch((err) => {
        alert(this.state.user);
        console.log(err);
      });

  }

  render() {
    const className = !this.state.isAuthentified ? 'toShow' : 'toHide';
    return (
      <div>

        <Button color="primary" className='modal-navbar' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LOG IN   ZONE</ModalHeader>
        
          <ModalBody>
            <div className={className}>
              <Form onSubmit={(e) => this.submitForm(e)} >
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
                </FormGroup>
                <Button type="submit" color="primary" className="btn-nav">Log in</Button>
      
              </Form>
            </div>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}
Connex.contextType = UserContext;
