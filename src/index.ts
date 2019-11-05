import { Observable, Observer, ReplaySubject, Subscription } from 'rxjs'
import { filter, share } from 'rxjs/operators'

// can add methods that either return singles or collections

// add arbirtrary methods to query singles or collections

type Future<A> = A | Promise<A> | Observable<A>
type ReturnsFuture<A> = (...args: any[]) => Future<A>

/**
 * Handles pagination by page number and/or by next page key
 */
type PaginationFunction = <A, State, QueryOptions>(
  queryOptions: QueryOptions,
) => (
  prevState: State,
) => Future<{
  nextState: State
  result: A[]
}>

type SinglesConfig<A> = {
  [key: string]: ReturnsFuture<A>
}

type CollectionsConfig<A> = {
  [key: string]: ReturnsFuture<A[]>
}

type MutationsConfig<A> = {
  [key: string]: ReturnsFuture<A>
}

type PaginationsConfig<A> = {
  [key: string]: PaginationFunction[]
}

interface EndpointConfig<A> {
  singleGetters: SinglesConfig<A>
  collectionGetters: CollectionsConfig<A>
  singleMutators: MutationsConfig<A>
  paginations: PaginationsConfig<A>
}

interface PaginatingByNumber {}

interface PaginatingByPrev {}
