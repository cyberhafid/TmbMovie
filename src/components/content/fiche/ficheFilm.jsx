import React from 'react'
import { Row, Col, Button} from 'reactstrap';


const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, onChange, value }) => {
  return (
    <div className='rating'>
      {
        range(min, max).map(item => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </div>
  )
}



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
    <Rating
      min={1}
      max={10}
      onChange={(rating) => this.setState({ rating })}
      value={Idvideo.vote_average}
    />
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
