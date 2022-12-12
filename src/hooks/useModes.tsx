import { useState } from "react"

export const useModes = () => {

  var isSelected1 = 'isSelected'
  var isSelected2 = ''
  var isSelected3 = ''

  const [LEFT_POSITION, SET_LEFT_POSITION] = useState('left0')
  // left-[0rem] mode1 DEFAULT
  // left-[7rem] mode2
  // left-[14rem] mode3

  if (LEFT_POSITION === 'left0') {
    isSelected1 = 'isSelected'
    isSelected2 = ''
    isSelected3 = ''
  }
  if (LEFT_POSITION === 'left28') {
    isSelected1 = ''
    isSelected2 = 'isSelected'
    isSelected3 = ''
  }
  if (LEFT_POSITION === 'left56') {
    isSelected1 = ''
    isSelected2 = ''
    isSelected3 = 'isSelected'
  }

  const Mode1 = () => {
    if (LEFT_POSITION === 'left0') {
      return
    } else {
      SET_LEFT_POSITION('left0')
    }
  } 
  const Mode2 = () => {
    if (LEFT_POSITION === 'left28') { // resolvind problem forr phone devices (sm =  min widht 640px)
      return
    } else {
      SET_LEFT_POSITION('left28')
    }
  } 
  const Mode3 = () => {
    if (LEFT_POSITION === 'left56') {
      return
    } else {
      SET_LEFT_POSITION('left56')
    }
  } 



  return(
{Mode1,Mode2,Mode3,isSelected1,isSelected2,isSelected3,LEFT_POSITION} 


  )
}
