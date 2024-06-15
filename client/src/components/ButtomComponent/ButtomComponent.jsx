import React from 'react'

const ButtomComponent = ({value,buttomStyle, spanStyle }) => {
  return (
    <div className=' items-center justify-center '>
        <button className={buttomStyle}>
        <span className={spanStyle}> {value}</span>
             
        </button>
    </div>
  )
}

export default ButtomComponent
