import React, { useContext } from 'react'
import { ThemeContext } from '../components/pages/Home.js'

function Button() {

    const theme = useContext(ThemeContext)
  return (

    <div>
        <a className={`${theme} btn`} href="#">Explore Now &#10132;</a>
    </div>
  )
}

export default Button
