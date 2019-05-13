import React from 'react'
import { Button, Form, Card, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';


export default function CommandeFilm({Afilm} ) {
  return (
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
{Afilm.panier.sort((a, b)=> a.prix - b.prix).map((mise, idx) => {

      const { idFilm, startDate, titre, image, prix } = mise;

      return (
        <Card body inverse color="primary" style={{ padding: '1em' }} >
        <Row className="tab-donnee" key={idx} >
          
          <Col>
          <img width="75" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${image}`} alt="alt" /> 
           </Col>
           <Link to={`/fiche/${idFilm}`}>   <Col>  
           
           
          {titre}</Col>  </Link>
           <Col>{startDate}</Col>

          <Col>{prix}</Col>
          <Col>{prix}</Col>
    
        </Row>
        </Card>
      );
    })
    }


<Row className="tab-sous-title">
<Col> <Button type="submit" value="Envoyer" >Submit</Button></Col>


  <Col>Prix</Col>
</Row>




</div>
  )
}
//reduce((a, b)=> a.prix + b.prix,0)













