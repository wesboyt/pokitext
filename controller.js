import init, { load_index, IndexType } from "./pkg/annoy.js"

await init(await fetch('./pkg/annoy_bg.wasm'))


const response = await fetch('./index.angular.5d.ann');
const ab = await response.arrayBuffer();
const u8a = new Uint8Array(ab)



document.getElementById('loadIndex').addEventListener('click', initializeIndex)

function initializeIndex(){
    let dimensions = document.getElementById('dimensionInput').value

    // const u8a = Buffer.from(ab);
    let index = load_index(u8a, dimensions, IndexType.angular);

    console.log(index)

}