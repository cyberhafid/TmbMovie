import React from 'react';
import axios from 'axios';
import  { Row, Col , Container} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class Premiere extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      persons: []
    };
  
    this.toggle = this.toggle.bind(this);
  }




  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      })
  }






  

  render() {
    return (
      <div>
        { this.state.persons.map((person, idx) => 
        
        <Container>
        <Row>
          {/* Grid Column */}
          <Col xs="4" sm="12" mb="4">
            {/*Modal: Name*/}

            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} tabIndex={-1} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody className="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe key={idx} className="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"  allowFullScreen />
          </ModalBody>
          <ModalFooter  className="justify-content-center">

            <span className="mr-4">Spread the word!</span>
                    <a type="button" className="btn-floating btn-sm btn-fb"><i className="fab fa-facebook-f" /></a>
                    {/*Twitter*/}
                    <a type="button" className="btn-floating btn-sm btn-tw"><i className="fab fa-twitter" /></a>
                    {/*Google +*/}
                    <a type="button" className="btn-floating btn-sm btn-gplus"><i className="fab fa-google-plus-g" /></a>
                    {/*Linkedin*/}
                    <a type="button" className="btn-floating btn-sm btn-ins"><i className="fab fa-linkedin-in" /></a>
                    <Button color="primary"  data-dismiss="modal" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>



            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <a><img className="img-fluid z-depth-1" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${person.poster_path}`} alt="video" data-toggle="modal" data-target="#modal1" /></a>
          </Col>
          {/* Grid Column */}
        </Row>
        </Container>
        
        )}
      </div>
    )
  }
}



