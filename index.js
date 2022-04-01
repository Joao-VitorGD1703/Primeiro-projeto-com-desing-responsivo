let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function decrement() {
    count = count - 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let contStr = count 
    // saveEl.innerText += contStr
    saveEl.textContent +=  ` ${contStr} -`
    countEl.textContent = 0
    count = 0

    console.log(count)



    //  saveEl.innerText =+ `Previus entries: ${count} - `;

}