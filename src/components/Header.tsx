import { useState } from "react"


export const Header = () => {

  var isSelected1 = 'isSelected'
  var isSelected2 = ''
  var isSelected3 = ''

  const [LEFT_POSITION, SET_LEFT_POSITION] = useState('left-0')
  // left-[0px] mode1 DEFAULT
  // left-[120px] mode2
  // left-[240px] mode3

  if (LEFT_POSITION === 'left-0') {
    isSelected1 = 'isSelected'
    isSelected2 = ''
    isSelected3 = ''
  }
  if (LEFT_POSITION === 'left-[120px]') {
    isSelected1 = ''
    isSelected2 = 'isSelected'
    isSelected3 = ''
  }
  if (LEFT_POSITION === 'left-[240px]') {
    isSelected1 = ''
    isSelected2 = ''
    isSelected3 = 'isSelected'
  }

  const Mode1 = () => {
    if (LEFT_POSITION === 'left-0 ') {
      return
    } else {
      SET_LEFT_POSITION('left-0')
    }
  } 
  const Mode2 = () => {
    if (LEFT_POSITION === 'left-[120px]') {
      return
    } else {
      SET_LEFT_POSITION('left-[120px]')
    }
  } 
  const Mode3 = () => {
    if (LEFT_POSITION === 'left-[240px] ') {
      return
    } else {
      SET_LEFT_POSITION('left-[240px]')
    }
  } 



  return (
    <div className="bg-midnight-dark rounded-full  flex justify-center items-center py-2 px-3  " >

      
        <nav className="relative h-full text-gray-300 px-6 py-2 left " >

          <div className="flex gap-9">
            
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