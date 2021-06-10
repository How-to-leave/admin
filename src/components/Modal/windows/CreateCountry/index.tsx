import { useState } from "react";

import { useOvermind } from "store";
import { Window } from "./styles";

export function CreateCountryWindow() {
  const { actions } = useOvermind();
  const [inputName, setInputName] = useState("");
  const [inputCapital, setInputCapital] = useState("");

  const handleClose = () => {
    actions.closeModal();
  };

  const handleCreate = () => {
    actions.createCountry({
      country: {
        name: inputName,
        capital: inputCapital,
      },
    });
    handleClose();
  };

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Добавить страну</div>
      <hr />
      <div>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <br />
        <input
          value={inputCapital}
          onChange={(e) => setInputCapital(e.target.value)}
        />
        <hr />
        <button onClick={handleCreate}>Добавить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  );
}
