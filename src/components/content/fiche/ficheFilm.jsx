import React from 'react'
import { Row, Col, Button} from 'reactstrap';
import Ficheetoile from './ficheetoile';






export default function FicheFilm({Idvideo, AjouterFavoris}) {
  return (
 
    <Row >
<Col sm="3" >
<img width="200px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Idvideo.poster_path}`} alt="alt" />

</Col>
<Col sm="9" >



<Row>
  <Col sm="8" className="film-title"  >
    {Idvideo.title}
  </Col>




  <Col sm="4" >
  <Row>
  <Col sm="12"  >
  <Ficheetoile Nombre={Idvideo.vote_average} />
    
    </Col>
    </Row>
    
    <Row>
  <Col sm="6"  >
<p>{Idvideo.vote_average} </p>
</Col>
<Col sm="6"  >
  <Button color="warning" onClick={AjouterFavoris}>Buy</Button>
</Col>

</Row>
     </Col>

</Row>


<Row className="film-synopsis" >
  {Idvideo.overview}
</Row>




<Row className="footermiddle" >
  <Col sm="4"  >
    <Row>
      <span>genre film vote_average: {Idvideo.genre_ids}</span>
      <span>date sortie film : {Idvideo.release_date}</span>  </Row>
  </Col>
  <Col sm="4" >
    <Row>

      <span>Origine : {Idvideo.popularity}</span>  
      </Row>
  </Col>
  <Col sm="4" >
    <Row   >
    <div   className="prixfilm">
   <p> {Idvideo.vote_average} €</p>

    </div>
      </Row>
  </Col>
</Row>

</Col>
</Row>

  )
}
