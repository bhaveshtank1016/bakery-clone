import React from 'react'
import{useGSAP} from "@gsap/react"
import gsap from "gsap"


function Feedback() {
    useGSAP(()=>{
        gsap.to(".box",{
            x:1000,
            duration:2,
            delay:2
        })
    })
  return (
    <div className='box h-12 w-12 runded-full bg-amber-800'></div>
  )
}

export default Feedback