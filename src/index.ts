import { Observable } from 'rxjs'
import { Future } from './future'
import { Nil } from './nil'
import { PaginationFunction } from './pagination'

// can add methods that either return singles or collections

// add arbirtrary methods to query singles or collections

type ReturnsFuture<A, Args extends any[]> = (...args: Args) => Future<A>

type FunctionsThatReturnFutures<A> = {
  [methodName: string]: ReturnsFuture<A, any>
}

type PaginationsConfig<A> = {
  [methodName: string]: PaginationFunction[]
}

interface EntityConfig<A, Id> {
  getId: (a: A) => Id
  idsEqual: (a: Id, b: Id) => any
  getById: (id: Id) => Future<A>
  singleGetters: FunctionsThatReturnFutures<A>
  collectionGetters: FunctionsThatReturnFutures<A[]>
  singleMutators: FunctionsThatReturnFutures<A | Nil>
  paginations: PaginationsConfig<A>
}

interface EntityManager<A, Id> {
  getFromCacheById: (id: Id) => Observable<A>
}
