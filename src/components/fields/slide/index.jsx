import React from 'react'
const index = ({image, name ,index,className}) => {
  return (
    <div className={"slide "+className}>
      <img src={image} alt={name} index={index}/>
    </div>
  )
}

export default index