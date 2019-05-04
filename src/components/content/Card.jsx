import React from 'react';
import { Card, Button,CardImg, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';





const Cardmovie = ({Numfilm}) => {
  return (
    <div>
      <Card>
        <CardHeader>{Numfilm.title}</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>{Numfilm.overview}</CardText>
          <CardImg top width="100%"  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Numfilm.poster_path}`} alt={Numfilm.title}/>
         
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>


    </div>
  );
};

export default Cardmovie;