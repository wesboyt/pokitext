import wasmURL from './pkg/annoy_bg.wasm'
import init, { load_index, IndexType } from "./pkg/annoy";

const response = await fetch('./index.angular.5d.ann');
const ab = await response.arrayBuffer();
const u8a = Buffer.from(ab);
this.index = load_index(u8a, 5, IndexType.angular);

console.log('taco')