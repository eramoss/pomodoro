import {  useState } from "react"
import { ButtonSettings } from "./ButtonSettings"
import {AiFillLeftCircle} from 'react-icons/ai'
import { useModalAppear } from "../../hooks/useModalAppear"



export const PageSettings = () => {


  const {IsModal,setModal,CloseModal} = useModalAppear()
  var ModalCloser = <></>


  if (IsModal === 'open-modal') {
    ModalCloser = <button onClick={CloseModal} className="absolute opacity-0 top-0 left-0 w-screen h-screen z-0 cursor-default "></button>
  } else {
    ModalCloser = <></>
  }
  console.log('foi')


  return (

    

    
      <div className="w-full items-center justify-center flex  ">
       
        <div className="z-20">
          <ButtonSettings onClick={setModal}/>
        </div>
          {ModalCloser}

        <div className={`absolute  ${IsModal}  bg-gray-300 left-0 top-0 h-screen  rounded transition-all duration-300 foc `} >
          <div className="w-full h-full flex justify-end items-start p-4" >
              <button  onClick={CloseModal} className=' text-3xl ' > <AiFillLeftCircle/> </button>
          </div>
            
        </div>
      </div>
    
  )
}