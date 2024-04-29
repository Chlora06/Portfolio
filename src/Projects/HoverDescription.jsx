import { useState } from 'react'

function HoverDescription ({image, alt, description}) {
  const [hover, setHover] = useState(false);

  return (
    <div className='image-container' 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}>
      <img src={image} alt={alt} />
      {hover && (
        <div className="image-description">
          {description}
        </div>
      )}
    </div>
  )
}

export default HoverDescription
