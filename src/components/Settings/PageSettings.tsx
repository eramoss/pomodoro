import {  useState } from "react"
import { ButtonSettings } from "./ButtonSettings"
import {AiFillLeftCircle} from 'react-icons/ai'
import { useModalAppear } from "../../hooks/useModalAppear"



export const PageSettings = () => {


  const {IsModal,OpenModal} = useModalAppear()


  return (
    <div className="w-full items-center justify-center flex  ">
      <div className="z-20">
        <ButtonSettings onClick={OpenModal}/>
      </div>
      
      <div className={`absolute  ${IsModal}  bg-gray-300 left-0 top-0 h-screen  rounded transition-all duration-300 foc `} >
        <div className="w-full h-full flex justify-end items-start p-4" >
           <button  onClick={OpenModal} className=' text-3xl ' > <AiFillLeftCircle/> </button>
        </div>
         
      </div>
    </div>
  )
}