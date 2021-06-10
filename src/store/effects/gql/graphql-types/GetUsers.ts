/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
}

export interface GetUsers {
  users: GetUsers_users[];
}
