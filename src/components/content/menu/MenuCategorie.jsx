import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './menu.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class MenuCategorie extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      persons: []

    }
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      .then(res => {
        const persons = res.data.genres;
        this.setState({ persons });
      })


  }

  render() {
    return (
      <div className="group">


        <ListGroup >
          {this.state.persons.map((person, index) =>
            <Link to={`/ListCat/${person.id}`}>
              <ListGroupItem key={index} className="list-group liennav">{person.name}</ListGroupItem>
            </Link>

          )}

        </ListGroup>
      </div>
    );
  }
}