import React, { useState } from "react"

interface SwitcherProps {
  label: string;
  icon?: React.ReactNode;
  functionSwitch : () => void
}


export const Switcher = ({functionSwitch,label,icon}:SwitcherProps) => {

  const [switch1, setSwitch1] = useState('bg-gray-400')
  var positionSwitch = 'translate-x-0'

  const handleClick = () => {
    if (switch1 === 'bg-gray-400') {
      setSwitch1('bg-orange-900')
      
    } else {
      setSwitch1('bg-gray-400')
    }
  }

  if (switch1 === 'bg-orange-900') {
    positionSwitch = 'translate-x-4'
  }


  return (
    <div className="flex items-center w-full justify-between  bg-white p-3 border-b-[0.5px] border-gray-300 rounded-full ">
      <div className="flex items-center gap-4 text-clip ">
        <div className="text-3xl">
          {icon}
        </div>
        
        <label  className="text-md tracking-wider" >{label}</label>
      </div>
      
      <span>
        <div onClick={functionSwitch }>
          <button onClick={handleClick} className={`rounded-full w-10 h-5 bgora bg-opacity-40 border-gray-500 flex items-center  ${switch1} `}>
            <div className={`rounded-full h-6 w-6 border border-yellow-900 border-opacity-35 ${positionSwitch} bg-slate-50 transition`} ></div>
          </button>
        </div>
      </span>
        
    </div>
  )
}