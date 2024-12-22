import React from 'react'
import propType from "prop-types"
const Card = ({id,imgSrc,tittle}) => {
  return (
    <div>
        <h1>ID: {id}</h1>
        <img src={imgSrc} alt="" />
        <p>{tittle}</p>
    </div>
  )
}

export default Card

Card.propType ={
    id:propType.number,
    imgSrc:propType.string,
    tittle:propType.string
}