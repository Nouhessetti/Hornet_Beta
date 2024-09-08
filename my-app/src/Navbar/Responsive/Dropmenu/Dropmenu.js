import './Dropmenu.css'
import { FaAngleRight } from "react-icons/fa6";
export default function Dropmenu(props){
    
    return(
        <div className='dropmenu'  style={{display:props.isShowedd ? 'none':'flex'}}>
                
               
                    
                        <a>Physics <FaAngleRight /></a>
                        <a>Mathematics <FaAngleRight /></a>
                        <a>Biology <FaAngleRight /></a>
                        <a>Giology <FaAngleRight /></a>
                        <a>It <FaAngleRight /></a>
                   
             
                    

        </div>
    )
}