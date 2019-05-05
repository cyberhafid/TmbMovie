import React from 'react';
  import './movie.css';




const CardsList = ({Numfilm}) => {
  return (
<React.Fragment>

    <div className="col-sm-6 col-md-4 country-card">
      <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-300 position-relative border-gray border-right px-2 bg-white rounded-left">
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${Numfilm.poster_path}`}
            className="d-block h-100"
            alt={Numfilm.title}
          />
        </div>
        <div className="px-3">
          <span className="country-name text-dark d-block font-weight-bold">
          {Numfilm.title}
          </span>
          <span className="country-region text-secondary text-uppercase">
          {Numfilm.overview}
          </span>
        </div>
      </div>
    </div>
    </React.Fragment>


  );
};

export default CardsList;