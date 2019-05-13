import React from 'react'



const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem = ({ checked, colored, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
   
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, value }) => {
  return (
    <div className='rating'>
      {
        range(min, max).map(item => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
     
          />
        ))
      }
    </div>
  )
}



export default function Ficheetoile({Nombre}) {
  return (
    <div>
      
      <Rating
      min={1}
      max={10}
   
      value={Nombre}
    />

    </div>
  )
}
