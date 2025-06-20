import React, { useEffect, useRef } from "react";

import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import Hero from "./Hero";
import Home from "./Home";
import Itemcategory from "./Itemcategory";
import Aboutvideo from "./Aboutvideo";
import Feedback from "./Feedback";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {

  const linkbtn = [
    { link: "/", title: "Home" },
    { link: "about", title: "About" },
    { link: "menu", title: "Menu" },
    { link: "team", title: "Team" },
    { link: "blog", title: "Blog" },
    { link: "contact", title: "Contact" },
  ];

  const headericon = [
    { link: "#", title: <FaFacebookF /> },
    { link: "#", title: <FaTwitter /> },
    { link: "#", title: <FaDribbble /> },
    { link: "#", title: <FaBehance /> },
  ];
  const ref = useRef()
  useGSAP(()=>{
    gsap.from(ref.current,{
      rotate:360,
      delay:1,
      duration:2
    })
  })
  return (
    <div className="container_fluid">
      <div className="banner-container">
        <div className="banner">
          <header className="header-one">
            <div className="top-header">
              <div className="top-left">
                {headericon.map((icons) => (
                  <a  to={icons.link}>{icons.title}</a>
                ))}
              </div>
              <div className="top-right">
                <a href="#">7375833508</a>
                <a href="https://www.zomato.com/">"https://www.zomato.com/"</a>
              </div>
            </div>
            <div className="header-menu text-[#D1AB7F] h-20 items-center sticky shadow-2xl  ">
              <div>
                <h2 ref={ref} className="font-bold text-xl">Bakery</h2>
              </div>
              <div>
                <ul   className="flex space-x-6 ">
                  {linkbtn.map((navi) => (
                    <li >
                      <a className="text-lg " to={navi.link}>
                        {navi.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>
        </div>
        <Hero />
        <Home />
        <Itemcategory/>
        <Aboutvideo/>
        <Feedback/>
      
      </div>
    </div>
  );
};

export default Navbar;
