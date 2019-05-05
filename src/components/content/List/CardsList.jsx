import React from 'react';
  import './movie.css';




const CardsList = ({Numfilm, changeDiv, className}) => {
  return (
<React.Fragment>

  

    <div className="container">
  <img    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Numfilm.poster_path}`}/>
  
  
  <div  onMouseOver={changeDiv} className={className}>
    <div className="text">Hello World className="{className}"</div>
  </div>


</div>



    </React.Fragment>


  );
};

export default CardsList;