
import { useTimer } from "../hooks/useTimer"

export const Starter = () => {

  const {Minutes,seconds,Pauser,StarterPause} = useTimer()


  return (
    <div className=" shadows h-96 w-96 flex justify-center items-center " >
      <div className="relative z-10" >
        <button  onClick={Pauser} className="text-7xl  h-[19rem] w-[19rem] bg-midnight-dark rounded-full text-white flex flex-col justify-center items-center font-bold border-[50px] border-midnight-dark">
          <span className="" >{`${Minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`}</span>
          <h1 className="text-base text-gray-500">{StarterPause}</h1>
        </button> 
      </div>
      

      <div className="h-[21rem] w-[21rem] stylePomodoro border-8 border-midnight-dark  rounded-full absolute z-0" > </div>
    </div>
  )

}