/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CountryInput } from "./../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateCountry
// ====================================================

export interface UpdateCountry_updateCountry {
  uid: string;
  name: string;
  capital: string;
}

export interface UpdateCountry {
  updateCountry: UpdateCountry_updateCountry;
}

export interface UpdateCountryVariables {
  uid: string;
  country: CountryInput;
}
