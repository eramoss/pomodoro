import { useState } from "react"

interface SwitcherProps {
  label: string;
  functionSwitch : () => void
}


export const Switcher = ({functionSwitch,label}:SwitcherProps) => {

  const [switch1, setSwitch1] = useState('bg-gray-400')
  var positionSwitch = 'translate-x-0'

  const handleClick = () => {
    if (switch1 === 'bg-gray-400') {
      setSwitch1('bg-gray-800')
      
    } else {
      setSwitch1('bg-gray-400')
    }
  }

  if (switch1 === 'bg-gray-800') {
    positionSwitch = 'translate-x-6'
  }


  return (
    <div className="flex items-center gap-2 ">
        <label htmlFor="button1">{label}</label>
        <button onClick={functionSwitch}>
          <button onClick={handleClick} className={`rounded-full w-14 h-8 px-[1px] border-[3px] border-black focus:border-[3.3px] flex items-center  ${switch1} `} id="button1">
            <div className={`rounded-full h-6 w-6 ${positionSwitch} bg-slate-50 transition`} ></div>
          </button>
        </button>
      </div>
  )
}