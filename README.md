# rxjs-datalayer

WIP general data layer for any javascript app. Inspiration comes from Relay, Redux, and ngrx/data.

Starting values (may change):
* type-driven: API should be well-typed without ambiguity
* general: API should delegate to the consumer when in doubt (transport, endpoints, pagination, RESTfulness)
* complete: support the majority of ways that servers present data and the ways clients prefer to consume them
* reactive: full buy-in to reactive programming
* caching: cache liberally, invalidate when necessary, and garbage collect appropriately
* simple: if a consumer can implement a feature, perhaps this library should not
