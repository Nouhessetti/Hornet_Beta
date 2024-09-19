import './Sounav.css'
import {useContext, useState,useEffect } from 'react'
import { Context } from '../categories';
import { FaAngleRight } from "react-icons/fa6";
import { createContext } from 'react';
export default function Sounnav(){
    const context = useContext(Context);
   
    return(
 
        <div className='sounav'>
            <span>Categories</span>
            <FaAngleRight />
            <span>{context.name}</span>
        </div>
      
    )
}