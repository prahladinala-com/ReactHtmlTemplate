import React from 'react'
const Card = ({
  title = 'BasketBall',
  buttonText = 'My Button',
  imgurl = 'https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  subtitle = "Some quick example text to build on the card title and make up the bulk of the card's content",
}) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={imgurl} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{subtitle}</p>
        <a href='#' className='btn btn-success'>
          {buttonText}
        </a>
      </div>
    </div>
  )
}
export default Card
