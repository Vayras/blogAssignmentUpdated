import { useState } from "react";

function MobileNav() {
    const [open, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between mx-4 mt-6">
                <p className="text-3xl">Large</p>
                <button onClick={() => setIsOpen(!open)} className="text-3xl">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {open && (
                <div className="flex  justify-between mx-4 mt-2">
                    <button>Subscribe</button>
                    <select>
                        <option>World</option>
                        <option>U.S.</option>
                        <option>Technology</option>
                        <option>Design</option>
                        
                        <option>Culture</option>
                        <option>Business</option>
                        <option>Politics</option>
                        <option>Opinion</option>
                        
                        <option>Science</option>
                        <option>Health</option>
                        <option>Style</option>
                        <option>Travel</option>
                    </select>
                    <button className="border-2 border-gray-400 px-2 rounded-md mt-2 mb-2" >Sign Up</button>
                </div>
            )}
        </>
    );
}

export default MobileNav;
