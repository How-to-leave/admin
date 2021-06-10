export const onInitialize = ({ effects }: any) => {
  effects.gql.initialize(
    {
      // query and mutation options
      endpoint: "http://localhost:4000/graphql",
    },
    {
      // subscription options
      endpoint: "http://localhost:4000/graphql",
    }
  );
};
