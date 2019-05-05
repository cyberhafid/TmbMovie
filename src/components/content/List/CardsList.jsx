import React from 'react';
  import './movie.css';




const CardsList = ({Numfilm, className}) => {
  return (
<React.Fragment>

  

    <div className="container">
  <img    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Numfilm.poster_path}`}/>
  
  
  <div  className="overlay calque">
  
    <div>
          <div className="calque titlecalque">
          {Numfilm.title}
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