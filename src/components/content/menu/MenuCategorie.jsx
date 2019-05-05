import React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

export default class MenuCategorie extends React.Component {
  render() {
    return (
      <div class="list-group">

        <ListGroup>
          <ListGroupItem className="bg-list"><h2 className="title-tab">Country</h2></ListGroupItem>
          <ListGroupItem><img width="30px" src="http://flags.fmcdn.net/data/flags/h20/fr.png" alt="index country" class="img-thumbnail"></img><span class="titre-menu"> France</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/gb.png" alt="index country" class="img-thumbnail"></img><span class="titre-menu"> Angleterre</span></ListGroupItem>
          <ListGroupItem>  <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/es.png" alt="index country" ></img><span class="titre-menu">   Espagne</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/it.png" alt="index country" class="img-thumbnail"></img><span class="titre-menu"> Italie</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://m.media-amazon.com/images/I/21IBE9wSkiL._AC_UL320_.jpg" alt="index country" class="img-thumbnail"></img><span class="titre-menu"> Gilets Jaunes</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="http://flags.fmcdn.net/data/flags/h20/dz.png" alt="index country" class="img-thumbnail"></img><span class="titre-menu"> Algerie</span></ListGroupItem>
          <ListGroupItem> <img width="30px" src="https://img.icons8.com/nolan/2x/circled-chevron-down.png" alt="index country" class="img-thumbnail"></img>Voir ++</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}