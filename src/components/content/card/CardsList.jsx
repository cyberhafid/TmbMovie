import React from 'react';
import './movie.css';
import Ficheetoile from '../fiche/ficheetoile';




const CardsList = ({ Numfilm }) => {
  return (
    <React.Fragment>



      <div className="container">
        <img width="200px" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Numfilm.poster_path}`} alt="alt" />


        <div className="overlay calque">

          <div>
            <div className="calque titlecalque">
              {Numfilm.title}
            </div>
            <div>
            <Ficheetoile Nombre={Numfilm.vote_average} />

            </div>
            
            <div className="textcalque">
              {Numfilm.overview}
            </div>
          </div>
        </div>


      </div>



    </React.Fragment>


  );
};

export default CardsList;