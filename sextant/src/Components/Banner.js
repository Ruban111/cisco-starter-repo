import React from 'react';
import '../Styles/Banner.css'
const Banner = ({bannerText}) =>{

return(
    <>
    <div className='Banner'>
        <div className="title">{bannerText}</div>
    </div>
    </>
);

}

export default Banner;