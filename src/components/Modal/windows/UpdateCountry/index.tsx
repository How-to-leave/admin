import { useEffect, useState } from "react";

import { useOvermind } from "store";
import { Window } from "./styles";

export function UpdateCountryWindow() {
  const { state, actions } = useOvermind();
  const [inputName, setInputName] = useState("");
  const [inputCapital, setInputCapital] = useState("");

  const handleClose = () => {
    actions.closeModal();
  };

  const handleUpdate = () => {
    actions.updateCountry({
      uid: state.modal.uid!,
      country: {
        name: inputName,
        capital: inputCapital,
      },
    });
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      await actions.getCountry({ uid: state.modal.uid! });
      setInputName(state.modal.currentCountry?.name!);
      setInputCapital(state.modal.currentCountry?.capital!);
    };
    fetchData();
  }, []);

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Обновить страну</div>
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
        <button onClick={handleUpdate}>Обновить</button>
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </Window>
  );
}
