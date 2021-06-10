import { useState } from "react";

import { useOvermind } from "store";
import { Window } from "./styles";

export function CreateUserWindow() {
  const { actions } = useOvermind();

  const [inputEmail, setInputEmail] = useState("");
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");

  const handleClose = () => {
    actions.closeModal();
  };

  const handleCreate = () => {
    actions.createUser({
      user: {
        firstName: inputFirstName,
        lastName: inputLastName,
        email: inputEmail,
      },
    });
    handleClose();
  };

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Добавить узера</div>
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
        <button onClick={handleCreate}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  );
}
