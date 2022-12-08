import { useState } from "react"
import { ButtonSettings } from "./ButtonSettings"
import {AiFillCloseSquare} from 'react-icons/ai'



export const PageSettings = () => {


  const [opacity,setOpacity] = useState('opacity-0 z-0 h-0')

  const ramires = () => {
    if (opacity === 'opacity-0 z-0 h-0') {
      setOpacity('opacity-100 z-30 h-screen')
    } else {
      setOpacity('opacity-0 z-0 h-0')
    }
  }

  return (
    <div className="w-full items-center justify-center flex  ">
      <div className="z-20">
        <ButtonSettings onClick={ramires}/>
      </div>
      
      <div className={`absolute  ${opacity}  bg-gray-300 left-0 top-0 w-96 rounded transition-all duration-300 `} >
        <div className="w-full h-full flex justify-end items-start p-4" >
           <button  onClick={ramires} className=' text-3xl ' > <AiFillCloseSquare/> </button>
        </div>
         
      </div>
    </div>
  )
}