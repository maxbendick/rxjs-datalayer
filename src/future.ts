import { Observable } from "rxjs";

export type Future<A> = A | Promise<A> | Observable<A>
