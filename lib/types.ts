import type { RequestHandler } from 'express'

/** HTTP request Methods */
export type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'
// | 'head' | 'options' | 'all'

/** Route path string literal */
export type Route = `/${string}`

/** Options for creating new route path. */
export interface PathOptions {}

/** Path meta data for router to use. */
export interface Meta {
  path: Route
  handlers: Array<{ method: Method; handler: RequestHandler }>
}

/** Options for setup function. */
export interface SetupOptions {
  paths?: Meta[]
}

/** Options for each custom handlers. */
export interface HandlerOptions {
  method: Method
  resolver: <R extends unknown>() => Promise<R>
}

export interface RouterOptions {}

