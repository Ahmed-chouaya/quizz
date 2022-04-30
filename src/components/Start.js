import React from 'react'
import './Start.css'

function Start(props) {
    

  return (
    <div className='start'>
        <h1 className='start-title'>Quizzical</h1>
        <p className='start-desc'>Challenge yourself with Quizzical</p>
        <button onClick={props.click} className='start-button'>Start quiz</button>
    </div>
  )
}

export default Start