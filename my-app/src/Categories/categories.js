import  {useState, useEffect} from 'react'

import Extra from './souCat/Extra'
import Deep from './deep/Deep'
import Sounnav from './Sounav/Sounav'
import './categories.css'
import {useParams} from 'react-router-dom'
import { createContext } from 'react'
export const Context = createContext()


export default function Categories(){
    
    const Data = [
        {
            id :1,
            name : ' Mathematic',
            img:'https://shorturl.at/1HFzn'
            

        },
        {
            id :2,
            name : ' Physics',
             img:'https://shorturl.at/QUD2W'

        },
        {
            id :3,
            name : ' Geology',
             img:'https://shorturl.at/1HFzn'

        },
        {
            id :4,
            name : 'Informatics',
             img:'https://shorturl.at/wjO01'

        },
    ]
    const params = useParams()
    const [Datacategories, setDatacategories]= useState([])
   useEffect(()=>{
     setDatacategories(Data[params.id])
   }, [params.id])
  
 
   const slides = [
    { img: 'https://via.placeholder.com/800x400?text=Image+1', title: 'Title 1' },
    { img: 'https://via.placeholder.com/800x400?text=Image+2', title: 'Title 2' },
    { img: 'https://via.placeholder.com/800x400?text=Image+3', title: 'Title 3' },
    { img: 'https://via.placeholder.com/800x400?text=Image+4', title: 'Title 4' },
    { img: 'https://via.placeholder.com/800x400?text=Image+5', title: 'Title 5' },
    { img: 'https://via.placeholder.com/800x400?text=Image+6', title: 'Title 6' },
    { img: 'https://via.placeholder.com/800x400?text=Image+7', title: 'Title 7' },
    { img: 'https://via.placeholder.com/800x400?text=Image+8', title: 'Title 8' },
    { img: 'https://via.placeholder.com/800x400?text=Image+9', title: 'Title 9' },
    { img: 'https://via.placeholder.com/800x400?text=Image+10', title: 'Title 10' },
  ];
 
    return(
        <div className="catgs" >
            <Context.Provider value={Datacategories}>
             <Sounnav />
            </Context.Provider>
          
        <div className='img_withname'>
                <img className='categ_cover' src={Datacategories.img} alt='logooo'/>
                <h1>{`Welcome to ${Datacategories.name}`}</h1>
            </div>
            
            <Extra />
            <Deep />
        </div>
    )
}