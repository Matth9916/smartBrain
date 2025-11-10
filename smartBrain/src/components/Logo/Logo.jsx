import React from "react";
// import { Tilt } from 'react-tilt';
import Tilt from "react-parallax-tilt";
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className="px-12 ma-4 mt-0">
            <Tilt className="Tilt rounded-md shadow-md"  options={{max : 25}} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner flex justify-center px-2 py-2"><img src={brain} alt="logo"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;