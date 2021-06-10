import { useOvermind } from "store";
import { Window } from "./styles";

export function DeleteUserWindow() {
  const { state, actions } = useOvermind();

  const handleClose = () => {
    actions.closeModal();
  };

  const handleRemove = () => {
    actions.deleteUser({ uid: state.modal.uid! });
    actions.closeModal();
  };

  return (
    <Window>
      <div onClick={handleClose}>X</div>
      <div>Удалить пользователя?</div>
      <hr />
      <div>
        <hr />
        <button onClick={handleRemove}>Удалить</button>
        <button onClick={handleClose}>Отмена</button>
      </div>
    </Window>
  );
}
