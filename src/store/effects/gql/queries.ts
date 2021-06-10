import { gql, Query } from "overmind-graphql";
import { GetCountries } from "./graphql-types/GetCountries";
import { GetCountry, GetCountryVariables } from "./graphql-types/GetCountry";
import { GetUser, GetUserVariables } from "./graphql-types/GetUser";
import { GetUsers } from "./graphql-types/GetUsers";

export const users: Query<GetUsers> = gql`
  query GetUsers {
    users {
      uid
      firstName
      lastName
      email
      emailVerified
    }
  }
`;

export const user: Query<GetUser, GetUserVariables> = gql`
  query GetUser($uid: ID!) {
    user(uid: $uid) {
      uid
      email
      firstName
      lastName
    }
  }
`;

export const countries: Query<GetCountries> = gql`
  query GetCountries {
    countries {
      uid
      name
      capital
    }
  }
`;

export const country: Query<GetCountry, GetCountryVariables> = gql`
  query GetCountry($uid: ID!) {
    country(uid: $uid) {
      uid
      name
      capital
    }
  }
`;
