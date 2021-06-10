import { gql, Query } from "overmind-graphql";
import {
  CreateCountry,
  CreateCountryVariables,
} from "./graphql-types/CreateCountry";
import { CreateUser, CreateUserVariables } from "./graphql-types/CreateUser";
import {
  DeleteCountry,
  DeleteCountryVariables,
} from "./graphql-types/DeleteCountry";
import { DeleteUser, DeleteUserVariables } from "./graphql-types/DeleteUser";
import {
  UpdateCountry,
  UpdateCountryVariables,
} from "./graphql-types/UpdateCountry";
import { UpdateUser, UpdateUserVariables } from "./graphql-types/UpdateUser";

export const createUser: Query<CreateUser, CreateUserVariables> = gql`
  mutation CreateUser($user: UserInput!) {
    createUser(input: $user) {
      uid
      email
      emailVerified
      firstName
      lastName
    }
  }
`;

export const createCountry: Query<CreateCountry, CreateCountryVariables> = gql`
  mutation CreateCountry($country: CountryInput!) {
    createCountry(input: $country) {
      uid
      name
      capital
    }
  }
`;

export const updateUser: Query<UpdateUser, UpdateUserVariables> = gql`
  mutation UpdateUser($uid: ID!, $user: UserInput!) {
    updateUser(uid: $uid, input: $user) {
      uid
      email
      emailVerified
      firstName
      lastName
    }
  }
`;

export const updateCountry: Query<UpdateCountry, UpdateCountryVariables> = gql`
  mutation UpdateCountry($uid: ID!, $country: CountryInput!) {
    updateCountry(uid: $uid, input: $country) {
      uid
      name
      capital
    }
  }
`;

export const deleteUser: Query<DeleteUser, DeleteUserVariables> = gql`
  mutation DeleteUser($uid: ID!) {
    deleteUser(uid: $uid) {
      uid
    }
  }
`;

export const deleteCountry: Query<DeleteCountry, DeleteCountryVariables> = gql`
  mutation DeleteCountry($uid: ID!) {
    deleteCountry(uid: $uid) {
      uid
    }
  }
`;
