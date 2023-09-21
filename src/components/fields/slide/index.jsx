import React from 'react'
const index = ({image,className}) => {
  return (
    <div className={"slide "+className}>
      {image ? <img src={image} /> : <div className='no-image'>Bo'sh joy</div>}
    </div>
  )
}

export default index