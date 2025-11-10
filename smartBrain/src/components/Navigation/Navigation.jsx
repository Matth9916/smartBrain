import React from "react";

const Navigation = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="text-2xl text-black underline p-4 cursor-pointer hover:opacity-50 transition">Sign Out</p>
        </nav>
    )
}

export default Navigation;