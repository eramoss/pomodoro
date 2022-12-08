import { MouseEventHandler } from 'react'
import {IoSettingsSharp} from 'react-icons/io5'


interface buttonPropps {
  onClick: MouseEventHandler<HTMLButtonElement>
}


export const ButtonSettings = ({onClick}:buttonPropps) => {



  return (
    <div className='text-4xl text-gray-300' >
      <button onClick={onClick} >
        <IoSettingsSharp/>
      </button>
    </div>
  )
}