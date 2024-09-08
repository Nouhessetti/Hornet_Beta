import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Logo from './logo.png';
import Responsive from './Responsive/Responsive'
import Dropdown from './Dropdown/Dropdown';
import Login from '../Login/login.js'
import { FaAlignJustify , FaAngleDown} from "react-icons/fa6";
export default function Navbar(){
{/*----------------------for style bar mobile phone-------*/}
const [X_container, setXcontainer] = useState(true)
 const [dropdoawnstate, setDropdoawnstate] = useState(false)
function drop(){
    setDropdoawnstate(!dropdoawnstate)
 }

    const X_adj = ()=>{
        setXcontainer(!X_container)
    }
 
    const styles = {
        Active: {
            display: 'flex'
        },
        Inactive: {
            display: 'none'
        },
        responsive:{
            display : 'flex'
        } 
    }
    const styless = {
        Active: {
            display: 'flex'
        },
        Inactive: {
            display: 'none'
        },
        responsive:{
            display : 'flex'
        } 
    }
    const visibility = {
        R_Active: {
            display: 'flex'
        },
        R_Inactive: {
            display: 'none'
        }

    }
{/*----------------------------------------------------*/}
const [arrowtrack, setArrowtrack] = useState(false)
const [arrowtrack_2, setArrowtrack_2] = useState(false)
const [arrowtrack_1, setArrowtrack_1] = useState(false)
const [loging, setLogin] = useState(false)
//const [dropdoawnstate, setDropdoawnstate] = useState(false)

function drop(){
   setDropdoawnstate(!dropdoawnstate)
}
function checkarrowtrack(){
   setArrowtrack(true)     
}
function checkarrowtrack_2(){
   setArrowtrack_2(prev => !prev)    
}
  

function checkarrowtrack_1(){
   setArrowtrack_1(prev => !prev)    
}
const [phoneCateg, setPhoneCateg] = useState(false)
function checkPhoneCateg(){
   setPhoneCateg(prev => !prev)
}
const [phoneProduct, setProduct] = useState(false)
function checkPhoneProduct(){
   setProduct(prev => !prev)
}
const [phoneTeam, setTeam] = useState(false)
function chekPhoneTeam(){
   setTeam(prev => !prev)
}
   
{/*----------------------------------------------------*/}


    return(
        <div className='navbar'>
            <div className='logo_container'>
               <Link  to='/'><img  className= 'logo-img'src={Logo} alt='logo' /> </Link>
               
            </div>
            <div className='menu_container'>
                <div className='TESTY' onMouseLeave={()=>{
                    setArrowtrack(false)  
                }} >
                <a onMouseEnter={checkarrowtrack}>Categories <FaAngleDown /> </a>
                 {arrowtrack && <Dropdown /> }
                </div>
             
                   <a>Products</a>
                  <a>Blog</a>
                    <a>Contact</a>
             
                
                
            </div>
            <div className='login_container'>
                <a onClick={()=>{
                    setLogin(prev => !prev)
                }}>Login</a>
                {loging && <Login />}
            </div>
           <div className='X_container' onClick={X_adj} styles={X_container ? styles.responsive : 'none'} >
           <FaAlignJustify />
            </div>
            <Responsive isShowed = {X_container}/>
        </div>
    )
}