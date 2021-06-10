import { Action, AsyncAction } from "overmind";
import { CreateCountryVariables } from "./effects/gql/graphql-types/CreateCountry";
import { CreateUserVariables } from "./effects/gql/graphql-types/CreateUser";
import { DeleteCountryVariables } from "./effects/gql/graphql-types/DeleteCountry";
import { DeleteUserVariables } from "./effects/gql/graphql-types/DeleteUser";
import { UpdateCountryVariables } from "./effects/gql/graphql-types/UpdateCountry";
import { UpdateUserVariables } from "./effects/gql/graphql-types/UpdateUser";
import { ModalWindows } from "./state";

// Уродец
export const openModal: Action<{ content: ModalWindows; uid?: string }> = (
  { state },
  { content, uid = null }
) => {
  state.modal.isOpen = true;
  state.modal.content = content;
  state.modal.uid = uid;
};

export const closeModal: AsyncAction = async ({ state }) => {
  state.modal.isOpen = false;
};

// Помойка
export const getUsers: AsyncAction = async ({ state, effects }) => {
  const { users } = await effects.gql.queries.users();
  state.users = users;
};

export const getUser: AsyncAction<{ uid: string }> = async (
  { state, effects },
  uid
) => {
  const { user } = await effects.gql.queries.user(uid);
  state.modal.currentUser = user;
};

export const getCountries: AsyncAction = async ({ state, effects }) => {
  const { countries } = await effects.gql.queries.countries();
  state.countries = countries;
};

export const getCountry: AsyncAction<{ uid: string }> = async (
  { state, effects },
  uid
) => {
  const { country } = await effects.gql.queries.country(uid);
  state.modal.currentCountry = country;
};

export const createUser: AsyncAction<CreateUserVariables> = async (
  { state, effects },
  input
) => {
  const { createUser } = await effects.gql.mutations.createUser(input);
  state.users.push(createUser);
};

export const createCountry: AsyncAction<CreateCountryVariables> = async (
  { state, effects },
  input
) => {
  const { createCountry } = await effects.gql.mutations.createCountry(input);
  state.countries.push(createCountry);
};

export const updateUser: AsyncAction<UpdateUserVariables> = async (
  { state, effects },
  input
) => {
  const { updateUser } = await effects.gql.mutations.updateUser(input);

  const newUsers = state.users.map((user) => {
    if (user.uid === updateUser.uid) {
      return updateUser;
    }
    return user;
  });

  state.users = newUsers;
};

export const updateCountry: AsyncAction<UpdateCountryVariables> = async (
  { state, effects },
  input
) => {
  const { updateCountry } = await effects.gql.mutations.updateCountry(input);

  const newCountries = state.countries.map((user) => {
    if (user.uid === updateCountry.uid) {
      return updateCountry;
    }
    return user;
  });

  state.countries = newCountries;
};

export const deleteUser: AsyncAction<DeleteUserVariables> = async (
  { state, effects },
  uid
) => {
  const { deleteUser } = await effects.gql.mutations.deleteUser(uid);
  const newUsers = state.users.filter((user) => deleteUser.uid !== user.uid);
  state.users = newUsers;
};

export const deleteCountry: AsyncAction<DeleteCountryVariables> = async (
  { state, effects },
  uid
) => {
  const { deleteCountry } = await effects.gql.mutations.deleteCountry(uid);
  const newCountries = state.countries.filter(
    (user) => deleteCountry.uid !== user.uid
  );
  state.countries = newCountries;
};
