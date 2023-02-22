import init, { load_index, IndexType } from "./pkg/annoy.js"

await init(await fetch('./pkg/annoy_bg.wasm'))




const response = await fetch('./index.angular.5d.ann');
console.log(response)
const ab = await response.arrayBuffer();
console.log(ab)
const u8a = new Uint8Array(ab)
console.log(u8a)
let index = load_index(u8a, 5, IndexType.angular);
console.log(index)


document.getElementById('searchIndex').addEventListener('click', searchIndex)


function searchIndex(){
    console.log(index.get_nearest([ 1.0689810514450073, 0.5634735226631165, 0.24886439740657806, 0.7266523241996765, -0.646281898021698 ], 10, -1, true))
}