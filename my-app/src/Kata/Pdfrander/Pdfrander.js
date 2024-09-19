import { useState } from "react";
import './Pdfrander.css'
import { IoTimer } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHackerrank, FaPersonRays , FaAngleDown, FaCircleUser, FaStar, FaDisplay } from "react-icons/fa6";



export default function Courses(){
     const categories =[
           {
            id : 0,
           item: 'math'
          
     },
     {
         
          id:1,
          item : 'physics'
     },
     {
          id:2,
          item : 'Biology and giology'
     },
     {
          id :3,
          item : 'Econome'
     }
  ]
  const [showItems, setShowItems] = useState(false)
  function itemmanip(){
     setShowItems(prev => 
          true
     )
  }
  function itemmaniphide(){
     setShowItems(prev => 
          false
     )
  }


    return(
        <div className='main_container_kata'>
              <div className='menu_container_kata'>
                    <div>
                     <FaHackerrank  className='menu_container_icones_kata'/>  
                     <span>Home</span> 
                    </div>
                    
                    <div>
                    <FaPersonRays   className='menu_container_icones_kata'/>
                    <span> Free Battle</span> 
                    </div>
                    <div>
               
                      <IoTimer   className='menu_container_icones_kata' />
                      <span> 15 min Battle</span> 
          
                    </div>
                  
                    
                    
              </div>
              <div className='contents_container_kata'>
                    <div className='path'> 
                        
                              <div> 
                              <FaStar  className='star' />
                              <div className='avatar'> 
                                 <span>Name Account</span>
                                  <CgProfile className='avatar_icones' /> 
                              </div>
                              
                                   <div className='scoore'>
                                        <span>125</span>
                                   </div>
                              
                               </div>
                         
                    </div>
                <div className='videos' > 
                         <div className='qsm' >
                          <h2> Suggested Challenge</h2>
                         <div className='options'  onClick={itemmanip}>
                              <span>physics</span>
                              <FaAngleDown />
                              <div className='all_categories' onMouseLeave={itemmaniphide}
                              style={{display: showItems? 'flex':'none'}} >
                                      {categories.map((item, index) => {
                                       
                                      
                                         
                                        return <span key={index}
                                    
                                        >{item.item } </span> 

                                        
                                   }      
                                      ) }    
                              </div>
                         </div>
                         <div className='options'>
                              <span>Atomics </span>
                              <FaAngleDown />
                         </div>
                         <div className='options'>
                              <span>Choose A Level </span>
                              <FaAngleDown />
                         </div>
                         <div className='train_btn'>
                              <button> Train</button>
                              <button> Skip</button>
                         </div>
                         

                          </div>
                         <div className='player'>
                         
                             {/* <iframe src={pdff} style={{width:'100%', height:'500px'}}/> */}
                         
                         </div>
                
                </div>

               
        
             </div>

        
        </div>
      
    )
}