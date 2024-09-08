import { useState } from 'react';
import './Responsive.css'
import Dropmenu from './Dropmenu/Dropmenu';
import { FaAngleRight } from "react-icons/fa6";
export default function Responsive(props){
    const [Xx_container, setXxcontainer] = useState(true)
    const X_adj = ()=>{
        setXxcontainer(!Xx_container)}
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
     
    
    return(
        <div className='responsive' style={{display:props.isShowed ? 'none':'flex'}}>
             
                    <div className='menu_container_responsive'>
                    
                        <a onClick={X_adj} styles={Xx_container ? styles.responsive : 'none'}>Categories<FaAngleRight /></a>
                        <Dropmenu isShowedd = {Xx_container} />
                      
                        <a>Products</a>
                        <a>Blog</a>
                        <a>Contact</a>
                    </div>
                    <div className='login_container_responsive'>
                        <a>Login</a>
                 </div>

        </div>
    )
}