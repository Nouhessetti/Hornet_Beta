import './course.css'
import { FaClock } from "react-icons/fa";
import { LuListVideo } from "react-icons/lu";

import { IoPlayCircleOutline } from "react-icons/io5";



export default function Courses(){

  
  
const Course = [
    {
        id: 0,
        name:'Introduction to Numériques',
        paragraph:'dive into the world of Algebra, A very smouth course'
    },
   
]
    return(
        <div className="course_container ">
          
           <div className='course_intro'>
            <>
               
               
                <h1>Introduction to Numériques</h1>
                <p>dive into the world of Algebra, A very smouth course</p>
                <div className='time_line_info'>
                    <FaClock />
                    <span>01/02/2004</span>
                    <span>12:00</span>
                </div>
               
           </>
           <div className='course_roll' style={{backgroundImage:`url(https://shorturl.at/REltb)` }}>
               <IoPlayCircleOutline />  
             
           </div>
           </div>
           <div className='more-info-course'>
                <h3>What you'll learn</h3>
                <span>learn the basis</span>
                <span>learn the basis</span>
                <span>learn the basis</span>
                <span>learn the basis</span>
                <span>learn the basis</span>
                <div>
                    <h3>Course content</h3>
                </div>
           </div>
        </div>
    )
}