import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import { state } from "./state";
import { onInitialize } from "./onInitialize";
import { gql } from "./effects/gql";
import * as actions from "./actions";

export const config = {
  state,
  actions,
  onInitialize,
  effects: {
    gql,
  },
};

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
