

import './login.css'
export default function Login (){
  
    return(
        <div className='login-container' >
            <div className='login-center-container'>
                <h1>Login</h1>
                <p>Please enter your username and password</p>
                <div className='login-input'>
                    <input type='text' placeholder='Enter your username...' />
                    <input type='password' placeholder='Enter your password ...' />
                    <div className='about-account'>
                        <div>
                         <input type='checkbox' />
                         <span>Rememeber me?</span>
                        </div>
                        <div>
                        
                         <span>forget password?</span>
                        </div>
                        
                    </div>
                    <button className='login-btn-input'>Login</button>
                </div>

            </div>
            <div className='signup-container'>
                <span>you don't have account?</span>
                <button className='signup-btn-input'>Create an Account Now</button>
            </div>
            <div className='others-options-login'>
                <p>Or Login With :</p>
                <div>
                    <span>Google</span>
                    <span>Facebook</span>
                </div>
            </div>

        </div>
    )
}