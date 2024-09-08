import  { useState } from "react";
import './Dropdown.css'

import { FaUserPlus, FaAtom , FaLaptopCode} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbMathFunction } from "react-icons/tb";
import { Link } from "react-router-dom";
export default function Dropdown(props){
 const [slide , setSlide] = useState([
    {
        id:0,
        on : true,
        color : "#626ee3",
        name : 'Mathematiques',
        icone: <TbMathFunction  className="main_side_icones" />
       
    },
    {
        id:1,
        on : false,
        color : "#890023",
        name : 'Physiques',
        icone: <FaAtom className="main_side_icones" />
    },
    {
        id:2,
        on : false,
        color : "#11967e",
        name : 'Geology',
        icone: <FaEarthAfrica className="main_side_icones" />
    },
    {
        id:3,
        on : false,
        color : "#f37f1b",
        name : 'Informatique',
        icone: <FaLaptopCode className="main_side_icones" />
    }
])


  
function cheking(id){
  
         setSlide(prevstate =>{
            const newstate = []
            // prevstate return the whole array
            // ...prevstate return what inside array
            // 1-- check if the irem have a true or false on
           // console.log(...prevstate.id)
           for(let i = 0; i < prevstate.length; i++){
            const currentitemflase = prevstate[i]
            const allfalse = {
                ...currentitemflase,
                on: false
            }
            const currentitem = prevstate[i]
             if(currentitem.id === id && currentitem.on === false){
              
              const update = {
               ...currentitem,
                on : !prevstate[i].on 
               
               }
              newstate.push(update)
            
              
             
            
           }
           
           else if(currentitem.id === id && currentitem.on === true ){
            const update2 = {
                ...currentitem,
                 on : prevstate[i].on ,
               
                }
               newstate.push(update2)
           
            
           }else{
            newstate.push(allfalse)
           }
            
        }
        targetpsedo(newstate)
        return newstate
        
           
         })

    }

const [onstatepsedo, setOnstate] = useState(0)
     
function targetpsedo(onstate){
    
   for(let i = 0; i < onstate.length; i++){
    const onupdate = onstate[i]
    if(onupdate.on === true){
       setOnstate(onupdate.id)
    }
   }
    
}

const side_title = slide.map((item , id)=>
   <Link to={`/categories/${item.name}`}> <div  className="item" key={id}
     style={{ background: slide[id].on ? slide[id].color : 'rgba(36, 72, 93, 0.458)'}}
     onMouseEnter={()=>
        cheking(id)
     }  
><div className="div_item_icones">{item.icone}</div> <div>{item.name}</div></div></Link>
)


 
 
  return(



        <div className="dropdown"> 
            <div className="mian_side">
            
                {side_title}
                

            </div>
            <div className="psedo_side psedoo"   style={{display:onstatepsedo === 0? 'flex' : 'none'}}  >
                <h1>Suites Numériques et Fonctions</h1>
                <h1> Généralités et Arithmétique dans Z  </h1>
                <h1> Structures,Polynômes et Fractions Rationnelles </h1>
                <h1>Intégration</h1>
                <h1>Formule de Taylor,Développement Limité et Applications</h1>
                <h1>Espaces Vectoriels, Matrices et Déterminants </h1>
                <h1> PROBABILITES et STATISTIQUES </h1>
             </div>
             <div  className="psedo_side1 psedoo"  style={{display:onstatepsedo ===1 ? 'flex' : 'none'}} >
                <h1>Mécanique 1</h1>
                <h1>Thermodynamique</h1>
                <h1>physique3</h1>
                <h1>physique4</h1>
                <h1>physique5</h1>
                
             </div>
             <div className="psedo_side2 psedoo"  style={{display:onstatepsedo === 2 ? 'flex' : 'none'}} >
                <h1>Mathimatics1</h1>
                <h1>Mathimatics2</h1>
                <h1>Mathimatics3</h1>
                <h1>Mathimatics4</h1>
                <h1>Mathimatics5</h1>
                
             </div>
             <div className="psedo_side3  psedoo"  style={{display:onstatepsedo === 3 ? 'flex' : 'none'}} >
                <h1>Introduction à l’informatique</h1>
                <h1>Algorithmique I</h1>
                <h1>PROGRAMMATION I</h1>
                <h1>ALGORITHMIQUE II</h1>
                <h1>TECHNOLOGIE DU WEB</h1>
                <h1>BASES DE DONNEES</h1>
                <h1>COMPILATION</h1>
                <h1>RESEAUX</h1>
             
                
             </div>
        </div>
    )
}