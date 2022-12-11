import { useContext, useState } from "react"

import { useModes } from "../hooks/useModes"



export const Header = () => {

  const {Mode1,Mode2,Mode3,isSelected1,isSelected2,isSelected3,LEFT_POSITION} = useModes()



  return (
    <div className="bg-midnight-dark rounded-full  flex justify-center items-center py-2 px-3 sm " >

      
        <nav className="relative h-full text-gray-300 px-6 py-2 left " >

          <div className="flex gap-10">
            
            <button onClick={Mode1} className={` ${isSelected1} relative inline-block z-10`}>
              pomodoro
            </button>
          
          
            <button  onClick={Mode2} className={` ${isSelected2} relative inline-block z-10`}>
              alert break
            </button>
          
          
            <button onClick={Mode3} className={` ${isSelected3} relative inline-block z-10`}>
              long break
            </button>
          </div>          
            
          
          <div className={`h-full top-0 ${LEFT_POSITION} absolute  transition-all ease-in-out bg-orange-datail w-32 rounded-full  z-0 `}></div>
        </nav>
        
        

    </div>
  )

}