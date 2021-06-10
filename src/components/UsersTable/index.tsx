import { useEffect } from "react";
import { useOvermind } from "store";
import { ModalWindows } from "store/state";

export function UsersTable() {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() =>
            actions.openModal({ content: ModalWindows.CreateUser })
          }
        >
          Добавить+
        </button>
        <input placeholder="Поиск..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Почта</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.uid}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                {user.email}
                {user.emailVerified ? "✔️" : "❌"}
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <span
                  onClick={() =>
                    actions.openModal({
                      content: ModalWindows.UpdateUser,
                      uid: user.uid,
                    })
                  }
                >
                  🖊️
                </span>{" "}
                |{" "}
                <span
                  onClick={() =>
                    actions.openModal({
                      content: ModalWindows.DeleteUser,
                      uid: user.uid,
                    })
                  }
                >
                  🗑️
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
