import init, { load_index, IndexType } from "./pkg/annoy.js"




await init(await fetch('./pkg/annoy_bg.wasm'))


const response = await fetch('./index.angular.5d.ann');

const ab = await response.arrayBuffer();
const u8a = new Uint8Array(ab)
let index = load_index(u8a, 5, IndexType.angular);



document.getElementById('searchIndex').addEventListener('click', searchIndex)


function searchIndex(){
    const query = JSON.parse(document.getElementById('vectorToSearch').value)
    const nearest = index.get_nearest(query, 10, -1, true)
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    nearest.forEach(element => {
        const newRow = tbody.insertRow()
        const newCell1 = newRow.insertCell()
        const newCell2 = newRow.insertCell()
        newCell1.innerHTML = element.id
        newCell2.innerHTML = element.distance
    })
}

