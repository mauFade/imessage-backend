export const userResolver = {
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      const { username } = args;

      console.log("username", username);
    },
  },
  Query: {
    searchUsers: () => {},
  },
  // Subscription: {},
};
