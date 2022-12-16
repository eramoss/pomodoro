import { MouseEventHandler } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { useModalAppear } from "../../hooks/useModalAppear";

interface buttonPropps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonSettings = ({ onClick }: buttonPropps) => {

  const { IsModal, setModal, CloseModal } = useModalAppear();

  return (
    <div className="text-4xl text-gray-300 z-50">
      <button onClick={onClick}>
        <IoSettingsSharp />
      </button>
    </div>
  );
};
