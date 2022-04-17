import React from 'react'
import './Card.css';

function Card(props) {

  return (
    <div className='both'>
      <div className='card'>
        <p>{props.head}</p>
      </div>
      <div></div>
    </div>
  )
}

export default Card