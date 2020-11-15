import React from 'react'

import style from '../recipe.module.css'

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.url}>{ingredient.text}</li>
        ))}
      </ol>
      <a href={url} target='_blank' rel='noreferrer'>
        View full recipe.
      </a>
      <img src={image} alt={title} />
    </div>
  )
}

export default Recipe
