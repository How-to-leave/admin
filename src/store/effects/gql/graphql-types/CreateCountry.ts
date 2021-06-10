/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CountryInput } from "./../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateCountry
// ====================================================

export interface CreateCountry_createCountry {
  uid: string;
  name: string;
  capital: string;
}

export interface CreateCountry {
  createCountry: CreateCountry_createCountry;
}

export interface CreateCountryVariables {
  country: CountryInput;
}
