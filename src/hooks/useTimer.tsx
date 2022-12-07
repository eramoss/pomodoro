import { useEffect, useState } from "react"

export const useTimer = () => {

  const INITIAL_TIME_IN_SECONDS = 25 * 60//25 minutes
  const [time, setTime] = useState(INITIAL_TIME_IN_SECONDS)
  const [isPause , setisPause] = useState(false)

  const Pauser = () =>{
    if(isPause === false) {
      setisPause(true)
    } else {
      setisPause(false)
    }
    
  }
  console.log(time)

  useEffect(() => {
    if (isPause === true) {
      return
    }
    if (time === 0 ) {
     
      return
    } else {
      setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    }
    
    
  }, [time, isPause])

  var StarterPause = (isPause === true) ? 'S T A R T' : 'P A U S E'
  var Minutes = Math.floor(time / 60).toString()
  var seconds = (time % 60).toString()

  return {Minutes, seconds, Pauser, StarterPause}
}