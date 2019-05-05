import React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';
import './menu.css';
export default class MenuCategorie extends React.Component {
  render() {
    return (
      <div class="list-group">

        <ListGroup>
          <ListGroupItem className="bg-list"><h4>categories</h4></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> France</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem><span class="titre-menu"> Angleterre</span></ListGroupItem>

                </ListGroup>
      </div>
    );
  }
}