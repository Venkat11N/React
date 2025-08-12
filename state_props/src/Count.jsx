import React from 'react'

function Count (props)  {
    console.log("Count rendered")
  return (
    <div>
      <h1 className='count'>{props.number}</h1>
    </div>
  )
}

export default Count
