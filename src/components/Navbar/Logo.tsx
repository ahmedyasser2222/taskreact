import React from 'react'
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const naviage = useNavigate()
    return ( 
        <div className='image-logo' onClick={()=>naviage('/')}>
              <img src='https://www.gebhaly.com/home/gebhalyLogo.png' alt='Logo' />
        </div>
     );
}
 
export default Logo;