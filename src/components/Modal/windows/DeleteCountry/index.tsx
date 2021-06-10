import { useOvermind } from "store";
import { Window } from "./styles";

export function DeleteCountryWindow() {
  const { state, actions } = useOvermind();

  const handleClose = () => {
    actions.closeModal();
  };

  const handleRemove = () => {
    actions.deleteCountry({ uid: state.modal.uid! });
    actions.closeModal();
  };

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Удалить страну?</div>
      <hr />
      <div>
        <hr />
        <button onClick={handleRemove}>Удалить</button>
        <button onClick={handleClose}>Отмена</button>
      </div>
    </Window>
  );
}
