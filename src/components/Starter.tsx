import { useModes } from "../hooks/useModes";
import { useTimer } from "../hooks/useTimer";

export const Starter = () => {
  const { Minutes, seconds, Pauser, StarterPause } = useTimer();
  const {
    Mode1,
    Mode2,
    Mode3,
    isSelected1,
    isSelected2,
    isSelected3,
    LEFT_POSITION,
    animationDown,
    animationUp,
  } = useModes();

  return (
    <div className=" flex flex-col gap-16">
      <div className="bg-midnight-dark rounded-full  flex justify-center items-center py-2 px-3 sm ">
        <nav className="relative h-full text-gray-300 px-6 py-2 left ">
          <div className="flex gap-10">
            <button
              onClick={() => {
                Mode1();
              }}
              className={` ${isSelected1} relative inline-block z-10`}
            >
              pomodoro
            </button>

            <button
              onClick={Mode2}
              className={` ${isSelected2} relative inline-block z-10`}
            >
              alert break
            </button>

            <button
              onClick={Mode3}
              className={` ${isSelected3} relative inline-block z-10`}
            >
              long break
            </button>
          </div>

          <div
            className={`h-full top-0 ${LEFT_POSITION} absolute  transition-all ease-in-out bg-orange-datail w-32 rounded-full  z-0 `}
          ></div>
        </nav>
      </div>
      <div className=" shadows h-96 w-96  flex justify-center items-center ">
        <div className="relative z-10 overflow-hidden  rounded-full">
          <button
            onClick={Pauser}
            className="text-7xl  h-[19rem] w-[19rem] bg-midnight-dark rounded-full text-white flex flex-col justify-center items-center font-bold border-[50px] border-midnight-dark "
          >
            <div className=" flex items-center justify-center w-96 h-96 absolute rounded-full">
              <span className={animationUp}>{Minutes.padStart(2, "0")}</span>
              <span className="pb-3">:</span>
              <span className={animationDown}>{seconds.padStart(2, "0")}</span>
            </div>

            <h1 className="text-base text-gray-500 mt-44">{StarterPause}</h1>
          </button>
        </div>

        <div className="h-[21rem] w-[21rem] stylePomodoro border-8 border-midnight-dark  rounded-full absolute z-0">
          {" "}
        </div>
      </div>
    </div>
  );
};
