/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} u8a
* @param {number} dimension
* @param {number} index_type
* @returns {AnnoyIndexJs}
*/
export function load_index(u8a: Uint8Array, dimension: number, index_type: number): AnnoyIndexJs;
/**
*/
export enum IndexType {
  Angular = 0,
  Euclidean = 1,
  Manhattan = 2,
  Hamming = 3,
  Dot = 4,
}
/**
*/
export class AnnoyIndexJs {
  free(): void;
/**
*/
  free(): void;
/**
* @param {number} item_index
* @returns {Array<any>}
*/
  get_item_vector(item_index: number): Array<any>;
/**
* @param {Array<any>} query_vector
* @param {number} n_results
* @param {number} search_k
* @param {boolean} should_include_distance
* @returns {Array<any>}
*/
  get_nearest(query_vector: Array<any>, n_results: number, search_k: number, should_include_distance: boolean): Array<any>;
/**
* @param {number} item_index
* @param {number} n_results
* @param {number} search_k
* @param {boolean} should_include_distance
* @returns {Array<any>}
*/
  get_nearest_to_item(item_index: number, n_results: number, search_k: number, should_include_distance: boolean): Array<any>;
/**
*/
  dimension: number;
/**
*/
  size: number;
}
/**
*/
export class SearchResultJs {
  free(): void;
/**
*/
  distance?: number;
/**
*/
  id: bigint;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_searchresultjs_free: (a: number) => void;
  readonly __wbg_get_searchresultjs_id: (a: number) => number;
  readonly __wbg_set_searchresultjs_id: (a: number, b: number) => void;
  readonly __wbg_get_searchresultjs_distance: (a: number, b: number) => void;
  readonly __wbg_set_searchresultjs_distance: (a: number, b: number, c: number) => void;
  readonly __wbg_annoyindexjs_free: (a: number) => void;
  readonly __wbg_get_annoyindexjs_dimension: (a: number) => number;
  readonly __wbg_set_annoyindexjs_dimension: (a: number, b: number) => void;
  readonly __wbg_get_annoyindexjs_size: (a: number) => number;
  readonly __wbg_set_annoyindexjs_size: (a: number, b: number) => void;
  readonly annoyindexjs_free: (a: number) => void;
  readonly annoyindexjs_get_item_vector: (a: number, b: number, c: number) => void;
  readonly annoyindexjs_get_nearest: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly annoyindexjs_get_nearest_to_item: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly load_index: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
