
import React, { useState } from "react";
import { createContext } from "react";


interface AppcontextData {
  Mode1: () => void;
  Mode2: () => void;
  Mode3: () => void;
  LEFT_POSITION: string;
  isSelected1: string;
  isSelected2: string;
  isSelected3: string;
}



interface Props {
  children: React.ReactNode
}

const ModesContext = createContext<AppcontextData>({} as AppcontextData);

export const ModesProvider: React.FC<Props> = ({children}) => {


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
  if (LEFT_POSITION === 'sm:left-32 left-28') {
    isSelected1 = ''
    isSelected2 = 'isSelected'
    isSelected3 = ''
  }
  if (LEFT_POSITION === 'sm:left-64 left-56') {
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
    if (LEFT_POSITION === 'sm:left-32 left-28') { // resolvind problem forr phone devices (sm =  min widht 640px)
      return
    } else {
      SET_LEFT_POSITION('sm:left-32 left-28')
    }
  } 
  const Mode3 = () => {
    if (LEFT_POSITION === 'sm:left-64 left-56') {
      return
    } else {
      SET_LEFT_POSITION('sm:left-64 left-56')
    }
  } 



  return(
    <ModesContext.Provider  value={ {Mode1,Mode2,Mode3,isSelected1,isSelected2,isSelected3,LEFT_POSITION} }>
      {children}
    </ModesContext.Provider>

  )
}

export default ModesContext;