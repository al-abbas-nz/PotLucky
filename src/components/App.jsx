import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Recipe from './Recipe'
import '../App.css'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const App = () => {
  //API details
  const APP_ID = '84cc3ca8'
  const APP_KEY = '74cf5c57d29fcd88151fe84324c26e71'
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
        <button
          className='search-button'
          value='vegan breakfast'
          onClick={updateSearch}
        >
          Breakfast
        </button>
        <button
          className='search-button'
          value='vegan lunch'
          onClick={updateSearch}
        >
          Lunch
        </button>
        <button
          className='search-button'
          value='vegan dinner'
          onClick={updateSearch}
        >
          Dinner
        </button>
        <button
          className='search-button'
          value='vegan dessert'
          onClick={updateSearch}
        >
          Dessert
        </button>
        <input
          className='search-bar'
          type='hidden'
          value={search}
          onChange={updateSearch}
          display='hidden'
        />
        {/* <button className='search-button' type='hidden'>
          Search
        </button> */}
      </form>

      {/* recipes */}
      <div className='recipes'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {recipes.map((recipe) => (
            <SwiperSlide>
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                url={recipe.recipe.url}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default App
