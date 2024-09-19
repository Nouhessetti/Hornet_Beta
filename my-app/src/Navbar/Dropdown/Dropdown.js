import  { useState } from "react";
import './Dropdown.css'
import { Link } from "react-router-dom";
import { FaUserPlus, FaAtom , FaLaptopCode} from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbMathFunction } from "react-icons/tb";

export default function Dropdown(props){
   const Math=[
        {
            id:0,
            name:'Suites Numériques et Fonctions',
        },
        {
            id:1,
            name:'Généralités et Arithmétique dans Z ',
        },
        {
            id:2,
            name:'Structures,Polynômes et Fractions Rationnelles ',
        },
        {
            id:3,
            name:'Intégration ',
        }        
    ]
    const Physics=[
        {
            id:0,
            name:'Suites Numériques et Fonctions',
        },
        {
            id:1,
            name:'Généralités et Arithmétique dans Z ',
        },
        {
            id:2,
            name:'Structures,Polynômes et Fractions Rationnelles ',
        },
        {
            id:3,
            name:'Intégration ',
        }        
    ]
    const Geo=[
        {
            id:0,
            name:'Suites Numériques et Fonctions',
        },
        {
            id:1,
            name:'Généralités et Arithmétique dans Z ',
        },
        {
            id:2,
            name:'Structures,Polynômes et Fractions Rationnelles ',
        },
        {
            id:3,
            name:'Intégration ',
        }        
    ]
    const Info=[
        {
            id:0,
            name:'Suites Numériques et Fonctions',
        },
        {
            id:1,
            name:'Généralités et Arithmétique dans Z ',
        },
        {
            id:2,
            name:'Structures,Polynômes et Fractions Rationnelles ',
        },
        {
            id:3,
            name:'Intégration ',
        }        
    ]
    
 const [slide , setSlide] = useState([
    {
        id:0,
        on : true,
        color : "#626ee3",
        name : 'Mathematiques',
        icone: <TbMathFunction  className="main_side_icones" />,
       
       
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
 <Link className="drop_links" key={id} to={`/categories/${item.id}`}> <div  className="item item_container" key={id}
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
                <>
                {Math.map((item,id)=>
                <Link className="drop_links" key={id} to={`/categories/mathematiques/${item.name}`}><h1>{item.name}</h1></Link>
                )

                }
                </>
             </div>
             <div  className="psedo_side1 psedoo"  style={{display:onstatepsedo ===1 ? 'flex' : 'none'}} >
             <>
                {Physics.map((item,id)=>
                <Link className="drop_links" key={id} to={`/categories/mathematiques/${item.name}`}><h1>{item.name}</h1></Link>
                )

                }
                </>
                
             </div>
             <div className="psedo_side2 psedoo"  style={{display:onstatepsedo === 2 ? 'flex' : 'none'}} >
             <>
                {Geo.map((item,id)=>
                <Link className="drop_links" key={id} to={`/categories/mathematiques/${item.name}`}><h1>{item.name}</h1></Link>
                )

                }
                </>
                
             </div>
             <div className="psedo_side3  psedoo"  style={{display:onstatepsedo === 3 ? 'flex' : 'none'}} >
             <>
                {Info.map((item,id)=>
                <Link className="drop_links" key={id} to={`/categories/mathematiques/${item.name}`}><h1>{item.name}</h1></Link>
                )

                }
                </>
             
                
             </div>
        </div>
    )
}