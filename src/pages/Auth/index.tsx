import { useHistory } from "react-router";

export function AuthPage() {
  const history = useHistory();

  const handleClick = () => {
    history.replace("/admin/countries");
  };

  return (
    <div>
      Auth page
      <form>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button onClick={handleClick}>Войти</button>
      </form>
    </div>
  );
}
