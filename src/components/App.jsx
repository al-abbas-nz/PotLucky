import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Recipe from './Recipe'
import '../App.css'

const App = () => {
  //API details

  //Hooks
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('vegan')

  useEffect(async () => {
    getRecipes()
  }, [query])

  //function that fetches API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  //uses setSearch hook
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  //uses setQuery hook. notices (search) here and in the return app.
  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className='App'>
      <div className='nav'>
        <Nav />
      </div>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App
