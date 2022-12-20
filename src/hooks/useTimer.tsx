import { useEffect, useState } from "react";
import { useModes } from "./useModes";

export const useTimer = () => {
  const INITIAL_TIME_IN_SECONDS = 25 * 60; //25 minutes
  const SECOND_TIME_IN_SECONDS = 10 * 60; //10 minutes
  const THIRD_TIME_IN_SECONDS = 30 * 60; //30 minutes
  const SLEEP_TIME_IN_SECONDS = 5 * 60; //30 minutes
  const [time, setTime] = useState(INITIAL_TIME_IN_SECONDS);
  const [isPause, setisPause] = useState(true);
  const { isSelected1, isSelected2, isSelected3 } = useModes();

  const Pauser = () => {
    if (isPause === false) {
      setisPause(true);
      const interval = setInterval(() => setTime(time), 1);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      setisPause(false);
    }
  };

  useEffect(() => {
    if (time === 0) {
      alert("cabou");
      setTime(SLEEP_TIME_IN_SECONDS);
      return;
    } else {
      if (!isPause) {
        setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
    }
  }, [time, isPause, SLEEP_TIME_IN_SECONDS]);

  var StarterPause = isPause === true ? "S T A R T" : "P A U S E";
  var Minutes = Math.floor(time / 60).toString();
  var seconds = (time % 60).toString();

  const resetTimer = () => {
    if (isSelected1 === "isSelected") {
      setisPause(true);
      const interval = setInterval(() => setTime(INITIAL_TIME_IN_SECONDS), 1);
      setTimeout(() => clearInterval(interval), 1000);
    }
    if (isSelected2 === "isSelected") {
      setisPause(true);
      const interval = setInterval(() => setTime(SECOND_TIME_IN_SECONDS), 1);
      setTimeout(() => clearInterval(interval), 1000);
    }
    if (isSelected3 === "isSelected") {
      setisPause(true);
      const interval = setInterval(() => setTime(THIRD_TIME_IN_SECONDS), 1);
    }
  };

  return {
    Minutes,
    seconds,
    Pauser,
    StarterPause,
    isPause,
    SECOND_TIME_IN_SECONDS,
    INITIAL_TIME_IN_SECONDS,
    THIRD_TIME_IN_SECONDS,
    setTime,
    time,
    setisPause,
    resetTimer,
  };
};
