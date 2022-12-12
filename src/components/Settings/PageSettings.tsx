import { useState } from "react"
import { Switcher } from "../Switcher"


export const PageSettings = () => {


const handleClick = () => {
  console.log('aé')
}


  return (
    <div className=' w-full h-full p-4 flex items-center justify-center gap-5  overflow-hidden' >  
    {// overflow hidden makes the objects invisible. With a slider, the objects gone sliding too 
    }
    <div className="flex flex-col  justify-center items-center gap-3">
      <div className=" flex gap-6">
        <Switcher label="jurema" functionSwitch={handleClick}/>
        <Switcher label="jurandir" functionSwitch={handleClick}/>
      </div>
      <div>loves</div>
    </div>
      

    </div>
  )
}