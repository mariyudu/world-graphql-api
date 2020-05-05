import { resolverQuery } from "./Query";
import { resolverMutation } from "./Mutation";
import { resolverType } from "./Type";

export const resolvers = {
  Query: resolverQuery,
  Mutation: resolverMutation,
  ...resolverType
}
