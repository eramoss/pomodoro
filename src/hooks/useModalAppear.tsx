import { useEffect, useState } from "react";

export const useModalAppear = () => {
  const [IsModal, setIsModal] = useState("close-modal");

  const setModal = () => {
    if (IsModal === "close-modal") {
      setIsModal("open-modal");
    }
    if (IsModal === "open-modal") {
      setIsModal("close-modal");
    }
  };

  const CloseModal = () => {
    if (IsModal === "open-modal") {
      setIsModal("close-modal");
    }
  };

  return { setModal, IsModal, CloseModal };
};
