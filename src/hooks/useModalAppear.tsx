import { useEffect, useState } from "react"

export const useModalAppear = () => {



  const [IsModal,setIsModal] = useState('close-modal')

  const OpenModal = () => {
    if (IsModal === 'close-modal') {
      setIsModal('open-modal')
    }
  }
 
  return {OpenModal,IsModal}
}