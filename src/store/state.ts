import { GetCountries_countries } from "./effects/gql/graphql-types/GetCountries";
import { GetCountry_country } from "./effects/gql/graphql-types/GetCountry";
import { GetUser_user } from "./effects/gql/graphql-types/GetUser";
import { GetUsers_users } from "./effects/gql/graphql-types/GetUsers";

export enum ModalWindows {
  CreateCountry = "CreateCountry",
  CreateUser = "CreateUser",
  UpdateCountry = "UpdateCountry",
  UpdateUser = "UpdateUser",
  DeleteCountry = "DeleteCountry",
  DeleteUser = "DeleteUser",
}

type rootState = {
  modal: {
    isOpen: boolean;
    content: ModalWindows;
    uid: string | null;
    currentUser: GetUser_user | null;
    currentCountry: GetCountry_country | null;
  };

  users: GetUsers_users[];
  countries: GetCountries_countries[];
};

export const state: rootState = {
  modal: {
    isOpen: false,
    content: ModalWindows.CreateCountry,
    uid: null,
    currentUser: null,
    currentCountry: null,
  },
  users: [],
  countries: [],
};
