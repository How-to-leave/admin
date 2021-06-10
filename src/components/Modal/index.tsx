import { useEffect, ReactNode, useCallback } from "react";
import ReactDOM from "react-dom";

import { useOvermind } from "../../store";
import { StyledModal, Overlay } from "./styles";
import { CreateCountryWindow } from "./windows/CreateCountry";
import { CreateUserWindow } from "./windows/CreateUser";
import { UpdateCountryWindow } from "./windows/UpdateCountry";
import { UpdateUserWindow } from "./windows/UpdateUser";
import { DeleteCountryWindow } from "./windows/DeleteCountry";
import { DeleteUserWindow } from "./windows/DeleteUser";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const { state, actions } = useOvermind();

  const handleClose = useCallback(() => {
    actions.closeModal();
  }, [actions]);

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <StyledModal isOpen={state.modal.isOpen}>
      <Overlay onClick={handleClose} />
      {children}
    </StyledModal>,
    document.getElementById("modal-root")!
  );
}

export {
  Modal,
  CreateCountryWindow,
  CreateUserWindow,
  UpdateCountryWindow,
  UpdateUserWindow,
  DeleteCountryWindow,
  DeleteUserWindow,
};
