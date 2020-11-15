import React from 'react'

import style from '../recipe.module.css'

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <a href={url} target='_blank' rel='noreferrer'>
        View Full Recipe
      </a>
    </div>
  )
}

export default Recipe
