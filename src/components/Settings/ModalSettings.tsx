import { useState } from "react";
import { ButtonSettings } from "./ButtonSettings";
import { AiFillLeftCircle } from "react-icons/ai";
import { useModalAppear } from "../../hooks/useModalAppear";

interface SettingsProps {
  children?: React.ReactNode;
}

export const ModalSettings = ({ children }: SettingsProps) => {
  const { IsModal, setModal, CloseModal } = useModalAppear();
  var ModalCloser = null;

  if (IsModal === "open-modal") {
    ModalCloser = (
      <button
        onClick={CloseModal}
        className="absolute opacity-0 top-0 left-0 w-screen h-screen z-0 cursor-default "
      ></button>
    );
  } else {
    ModalCloser = null;
  }

  return (
    <div className="w-full items-center justify-center flex  ">
      <div className="z-20">
        <ButtonSettings onClick={setModal} />
      </div>
      {ModalCloser}

      <div
        className={`absolute  ${IsModal} bg-gray-300  left-0 top-0 h-screen  rounded-r-lg  transition-all duration-300 foc `}
      >
        <div className="w-full h-full flex justify-end items-start p-4">
          <button onClick={CloseModal} className=" text-3xl z-30">
            {" "}
            <AiFillLeftCircle />{" "}
          </button>
          <div className="absolute  w-full h-full top-0 right-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
