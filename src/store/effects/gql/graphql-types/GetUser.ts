/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface GetUser {
  user: GetUser_user;
}

export interface GetUserVariables {
  uid: string;
}
