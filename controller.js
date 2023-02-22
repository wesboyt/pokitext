import init, { load_index, IndexType } from "./pkg/annoy.js"

await init(await fetch('./pkg/annoy_bg.wasm'))


const response = await fetch('./embeddings.512d.ann');
const ab = await response.arrayBuffer();
const u8a = new Uint8Array(ab)
let index = load_index(u8a, 512, IndexType.angular);

const jsonMap = JSON.parse(await (await fetch('./pipeline/inputs.json')).text())
let starKeys = Object.keys(jsonMap)
let starValues = Object.values(jsonMap)
document.getElementById('searchIndex').addEventListener('click', searchIndex)
let model = await use.load()


async function searchIndex(){
    const query = document.getElementById('vectorToSearch').value
    const embedding = await model.embed([query])
    const processedEmbedding = new Float32Array(embedding.arraySync()[0])
    const nearest = index.get_nearest(processedEmbedding, 12, -1, true)
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    nearest.forEach(element => {
        const newRow = tbody.insertRow()
        const newCell1 = newRow.insertCell()
        const newCell2 = newRow.insertCell()
        newCell1.innerHTML = starKeys[element.id]
        newCell2.innerHTML = element.distance
    })
    console.log(starValues[nearest[0].id])
}

