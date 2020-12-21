import React from 'react'
import Card from './Card'
const CardSection = () => {
  return (
    <section className='contact bg-success '>
      <div className='container '>
        <h2 className='text-white'>We love new friends!</h2>
        <div className='row'>
          <div className='col-4'>
            <Card title='Prahlad Inala' buttonText='CLick me' />
          </div>
          <div className='col-4'>
            <Card
              title='Rahul Nair'
              buttonText='Disabled'
              imgurl='https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              subtitle='Here is the subtitle content of this card coming from Card.js component'
            />
          </div>
          <div className='col-4'>
            <Card
              title='Venkat Rao'
              subtitle='Hii ! I am Venkat Rao, Professor at Jawaharlal Nehru Govt Polytechnic , Ramanthapur'
              imgurl='https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              buttonText='Open Link'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection
