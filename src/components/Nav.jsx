import React from 'react'

import style from '../nav.module.css'

const Nav = () => {
  return (
    <div className={style.centerNav}>
      <h1 className={style.h1}>PotLucky</h1>
      <p className={style.p}>Find your new favourite plant-based recipes</p>
    </div>
  )
}

export default Nav
