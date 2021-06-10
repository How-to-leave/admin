import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { AuthPage } from "./pages/Auth";
import { CountriesPage } from "./pages/Countries";
import { UsersPage } from "./pages/Users";
import { BaseLayout } from "./layouts";
import {
  Modal,
  CreateCountryWindow,
  CreateUserWindow,
  UpdateCountryWindow,
  UpdateUserWindow,
  DeleteCountryWindow,
  DeleteUserWindow,
} from "./components/Modal";
import { useOvermind } from "./store";
import { ModalWindows } from "./store/state";
import MainStyles from "./styles/main";

const GlobalStyles = createGlobalStyle`
  ${MainStyles}
`;

function App() {
  const { state } = useOvermind();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin" />
        </Route>

        <Route exact path="/admin">
          <AuthPage />
        </Route>

        <BaseLayout>
          <Route exact path="/admin/countries">
            <CountriesPage />
          </Route>
          <Route exact path="/admin/users">
            <UsersPage />
          </Route>
        </BaseLayout>
      </Switch>
      <GlobalStyles />
      {state.modal.isOpen && (
        <Modal>
          {state.modal.content === ModalWindows.CreateCountry ? (
            <CreateCountryWindow />
          ) : state.modal.content === ModalWindows.CreateUser ? (
            <CreateUserWindow />
          ) : state.modal.content === ModalWindows.UpdateCountry ? (
            <UpdateCountryWindow />
          ) : state.modal.content === ModalWindows.UpdateUser ? (
            <UpdateUserWindow />
          ) : state.modal.content === ModalWindows.DeleteCountry ? (
            <DeleteCountryWindow />
          ) : (
            <DeleteUserWindow />
          )}
        </Modal>
      )}
    </>
  );
}

export default App;
