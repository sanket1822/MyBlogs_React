import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {


  return (
    <div> 
        <h2> Sorry</h2>
        <p> The page NotFound</p>
        <Link to="/"> Go Back To HomePage</Link>
    </div>
  )
}
