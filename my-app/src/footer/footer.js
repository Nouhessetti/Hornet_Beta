
import './footer.css'
import Logo from './logo.png'
export default function Footer (){
    return(

        <div className='footer'>
            <div className='footer--logo'>
                <img className='footer_logo' src= {Logo} alt='logo' />
              
            </div>
            <div className='footer--list'>
                <ul>
                    <a>Categories</a>
                    <a>Product</a>
                    <a>Team</a>
                    <a>Conatat Us</a>
                    <a>About Us</a>
                </ul>
                <ul>
                    <a>Help And FAQ</a>
                    <a>Blog</a>
                    <a>Terms</a>
                    <a>Cookies Sttings</a>
                    <a>Legal & Privacy</a>
                   
                </ul>
            </div>
            <div className='newsletter'>
                <input type='email' placeholder='Email Adress' />
                <button className='btn-newsletter'> Subscibe To Newsletter</button>
            </div>
            <div className='chakra--div'>
            <small className="chakra">© 2023 
                Horned univercity, Inc.  
                <br />We use cookies and other data collection technologies to 
                provide the best experience for our customers.</small>

            </div>
            
        </div>
    )
}