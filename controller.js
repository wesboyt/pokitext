import init, { load_index, IndexType } from "./pkg/annoy.js"

await init(await fetch('./pkg/annoy_bg.wasm'))


const response = await fetch('./index.angular.5d.ann');
const ab = await response.arrayBuffer();
const u8a = new Uint8Array(ab)

document.getElementById('loadIndex').addEventListener('click', initializeIndex)

function initializeIndex(){
let userInput = document.getElementById('dimensionInput').innerText

// const u8a = Buffer.from(ab);
let index = load_index(u8a, 5, IndexType.angular);

console.log(index.get_nearest([ 1.0689810514450073, 0.5634735226631165, 0.24886439740657806, 0.7266523241996765, -0.646281898021698 ], 10, -1, true))

}