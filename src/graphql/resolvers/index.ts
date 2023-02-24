import { userResolver } from "./user";
import merge from "lodash.merge";

export const resolvers = merge({}, userResolver);
