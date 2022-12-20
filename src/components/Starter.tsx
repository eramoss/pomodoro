import { useModes } from "../hooks/useModes";
import { useTimer } from "../hooks/useTimer";
import { BiReset } from "react-icons/bi";

export const Starter = () => {
  const {
    Minutes,
    seconds,
    Pauser,
    setTime,
    StarterPause,
    isPause,
    INITIAL_TIME_IN_SECONDS,
    SECOND_TIME_IN_SECONDS,
    THIRD_TIME_IN_SECONDS,
    setisPause,
  } = useTimer();
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
      <button
        onClick={() => {
          if (isSelected1 === "isSelected") {
            setisPause(true);
            const interval = setInterval(
              () => setTime(INITIAL_TIME_IN_SECONDS),
              1
            );
            setTimeout(() => clearInterval(interval), 1000);
          }
          if (isSelected2 === "isSelected") {
            setisPause(true);
            const interval = setInterval(
              () => setTime(SECOND_TIME_IN_SECONDS),
              1
            );
            setTimeout(() => clearInterval(interval), 1000);
          }
          if (isSelected3 === "isSelected") {
            setisPause(true);
            const interval = setInterval(
              () => setTime(THIRD_TIME_IN_SECONDS),
              1
            );
            setTimeout(() => clearInterval(interval), 1000);
          }
        }}
        className="bg-orange-datail rounded-full fixed top-4 right-4 text-lg flex p-2"
      >
        <BiReset className="text-3xl" />
      </button>
      <div className="bg-midnight-dark rounded-full  flex justify-center items-center py-2 px-3 sm ">
        <nav className="relative h-full text-gray-300 px-6 py-2 left ">
          <div className="flex gap-10">
            <button
              disabled={!isPause}
              onClick={() => {
                Mode1();
                if (!isSelected1) {
                  setTimeout(() => {
                    setTime(INITIAL_TIME_IN_SECONDS);
                  }, 500);
                }
              }}
              className={` ${isSelected1} relative inline-block z-10`}
            >
              pomodoro
            </button>

            <button
              disabled={!isPause}
              onClick={() => {
                Mode2();
                if (!isSelected2) {
                  setTimeout(() => {
                    setTime(SECOND_TIME_IN_SECONDS);
                  }, 500);
                }
              }}
              className={` ${isSelected2} relative inline-block z-10`}
            >
              alert break
            </button>

            <button
              disabled={!isPause}
              onClick={() => {
                Mode3();
                if (!isSelected3) {
                  setTimeout(() => {
                    setTime(THIRD_TIME_IN_SECONDS);
                  }, 500);
                }
              }}
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
      <div className=" shadows h-96 w-96 flex justify-center items-center ">
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
