import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="text-lg text-center">
                {'Cette application détecte les visages sur vos images. Essayez là.'}
            </p>
            <div className="flex justify-center mt-4 w-full">
                <div className="form flex justify-center mt-4 p-8 rounded-lg shadow-lg">
                    <input className="text-base p-2 w-[70%] mx-auto bg-white" type="text" />
                    <button className="flex-grow px-4 py-2 text-white bg-purple-400 hover:bg-purple-500 hover:scale-105 transition-all duration-200 rounded-r-md transform">
                        Détecter
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;