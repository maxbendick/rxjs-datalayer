import { Future } from "./future";

/**
 * Handles pagination by page number and/or by next page key.
 * 
 * For a given pagination context, `queryOptions` will be provided once,
 * and the resulting function will be called many times
 */
export type PaginationFunction = <A, State, QueryOptions>(
  queryOptions: QueryOptions,
) => (
  prevState?: State,
) => Future<{
  nextState: State
  data: A[]
}>
