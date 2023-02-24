import React, { useRef, useState } from "react";
import { IoLogoIonic } from "react-icons/io"
import { Spin as Hamburger } from 'hamburger-react'


function Nav() {
    const [ isOpen, setIsOpen ] = useState(false)
    console.log(isOpen);
    
    
    
    let links = [
        {name: "Home", link:"https://www.github.com"},
        {name: "Service", link:"https://www.youtube.com"},
        {name: "About", link:"https://www.gmail.com"},
        {name: "Blog's", link:"https://www.google.com"},
        {name: "Contact", link:"https://www.livescore.com"}
    ]
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white py-4 px-7 md:px-10 ">
            <div className={`font-bold text-2xl cursor-pointer flex items-center text-gray-800 transition-opacity duration-300 ease-out ${isOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}>
                <span>
                    <IoLogoIonic  className="text-4xl inline-block text-indigo-600" />
                </span>
                Design
            </div>
            <div onMouseEnter={() => {
                    setIsOpen(!isOpen);
                }} 
                onMouseLeave={() => {
                    setIsOpen(false)
                }}
                className="absolute right-8 z-10 top-3 cursor-pointer md:hidden">
                <Hamburger direction="right" toggled={isOpen} hover={() => setIsOpen(!isOpen)} size={26}/>
            </div>
                <ul className={`md:flex md:items-center md:p-0 py-4 md:h-auto h-screen md:static absolute top-0 right-0 bg-white md:w-auto w-4/5 md:pl-0 pl-8 transition-transform duration-500 ease-out"} ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
                    <div className={`md:hidden font-bold transition-transform  mb-7 duration-500 ease-out w-full text-2xl cursor-pointer flex items-center text-gray-800 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                        <span>
                            <IoLogoIonic  className="text-4xl inline-block text-indigo-600" />
                        </span>
                        Design
                    </div>
                    {
                        links.map(({name, link}) => {
                            return (                                    
                                <li key={name} className="md:ml-8 text-xl md:my-0 my-7">
                                    <a className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer" target="_blank" href={link}>{name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    </nav>
  )
}

export default Nav;
