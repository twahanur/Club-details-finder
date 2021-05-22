import React from 'react';
import preloaderGif from '../../img/preloader.gif'
const preloader = () => {
    return (
        <div style={{ width:'100%', height:'100vh', background:'white', }} className="container align-items-center position-absolute top-50 start-50 translate-middle">
            <img style={{ width:'100px', height:'100px', background:'white', }} src= {preloaderGif} alt="" />
        </div>
    );
};

export default preloader;