import React from "react";

const Navigation = ({ imageUrl }) => {
    return (
        <div className="center ma-2">
            <div className="absolute mt-8">
                <img alt="" src={imageUrl} width={'500px'} height={'auto'}></img>
            </div>
        </div>
    )
}

export default Navigation;