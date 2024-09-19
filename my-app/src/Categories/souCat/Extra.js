// src/Slider.js
import  { useState } from 'react';
import Cours from './image1.jpg'
import './extra.css'
function Extra(){
  const Data = [
    {
      id:1,
      name:'Algebra',
      time:'87min',
      cover:'https://shorturl.at/qHBLv'
    },
    {
      id:2,
      name:'Complex Numbers',
      time:'77min',
      cover:'https://shorturl.at/T9g7N'
    },
    {
      id:3,
      name:'Analytics',
      time:'97min',
      cover:'https://shorturl.at/qHBLv'
    },
    {
      id:4,
      name:'Fondamentals',
      time:'107min',
      cover:'https://shorturl.at/T9g7N'
    },
    {
      id:5,
      name:'Probabilties',
      time:'77min',
      cover:'https://shorturl.at/qHBLv'
    },
    {
      id:6,
      name:'Statistics',
      time:'88min',
      cover:'https://shorturl.at/qHBLv'
    }
  ]
  return(
   <div className='extra-container'>
       {/*<div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>

       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>

       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>

       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>
       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>
       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>
       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>
       <div className='sou-container'>
        <img src={Cours} alt='cours' className='img_container' />
        <h3>Algebra</h3>
        <span>1H 30min</span>
       </div>*/}
       {Data.slice(0, 5).map(item=>
         <div className='sou-container'>
         <img src={item.cover} alt='cours' className='img_container' />
         <h3>{item.name}</h3>
         <span>{item.time}</span>
         
        </div>

       )}
       
   </div>
  )
}

export default Extra;
