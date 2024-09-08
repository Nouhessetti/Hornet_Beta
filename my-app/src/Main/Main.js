import React, {useState, useEffect} from 'react'
import './Main.css'
import About from './About/About'
import image from './main_image.png'

//import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaBars} from "react-icons/fa";
 export default function Main() {

  //  const [offers, setOffers] = useState(['Clarity' ,' productivity', 'quality' , 'effictivenise'])
   //let timerID = setTimeout(func, delay)
   //let timerID = setTimeout(...); clearTimer(timerID);
   

const arraylist = ["#Clarity", "#Professionalism", "#Quality", "#Efficiency", "#Gradual"];


  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count + 1) % arraylist.length);
      
    }, 4000);

    return () => clearInterval(intervalId); // Clear the interval on unmount

  }, [count]);






    //---------------------------------------------------------

    return(
      <div>
        <div  className='main'>
               <div className ='title'>
                <h1> welcome the first interctive plateforme for scientistes and engenries !.</h1>
                
                <div className='animation_box'>
                  <h2 className> {arraylist[count]} </h2>

                </div>
    
                <div className='regester_main' >
                    <button>Join Us</button>
                </div>
                

               </div>

        <img src={image} alt='main_img' />
          
        </div>
       
       <About />
        </div>
    )
 }
