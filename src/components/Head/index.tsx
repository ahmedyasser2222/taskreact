import React from 'react'
import './style.scss'

interface HeadProps {
    title : string ;
    subTitle ?: string ;
}

const Head : React.FC<HeadProps> = ({
    title,
    subTitle
}) => {
    return ( 
        <div className='head'>
             <div className="container">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
             </div>
        </div>
     );
}
 
export default Head;