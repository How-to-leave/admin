import { useEffect } from "react";
import { useOvermind } from "store";
import { ModalWindows } from "store/state";

export function CountriesTable() {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.getCountries();
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() =>
            actions.openModal({ content: ModalWindows.CreateCountry })
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
            <th>Страна</th>
            <th>Столица</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.countries.map((country) => (
            <tr key={country.uid}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>
                <span>👁️</span> |{" "}
                <span
                  onClick={() =>
                    actions.openModal({
                      content: ModalWindows.UpdateCountry,
                      uid: country.uid,
                    })
                  }
                >
                  🖊️
                </span>{" "}
                |{" "}
                <span
                  onClick={() =>
                    actions.openModal({
                      content: ModalWindows.DeleteCountry,
                      uid: country.uid,
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
