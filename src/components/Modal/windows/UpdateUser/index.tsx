import { useEffect, useState } from "react";

import { useOvermind } from "store";
import { Window } from "./styles";

export function UpdateUserWindow() {
  const { state, actions } = useOvermind();

  const [inputEmail, setInputEmail] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  const handleClose = () => {
    actions.closeModal();
  };

  const handleUpdate = () => {
    actions.updateUser({
      uid: state.modal.uid!,
      user: {
        email: inputEmail,
        firstName: inputFirstName,
        lastName: inputLastName,
      },
    });
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      await actions.getUser({ uid: state.modal.uid! });
      setInputEmail(state.modal.currentUser?.email!);
      setInputFirstName(state.modal.currentUser?.firstName!);
      setInputLastName(state.modal.currentUser?.lastName!);
    };
    fetchData();
  }, []);

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Обновить узера</div>
      <hr />
      <div>
        <input
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <br />
        <input
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
        />
        <br />
        <input
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
        />
        <hr />
        <button onClick={handleUpdate}>Обновить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  );
}
