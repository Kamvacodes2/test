'use strict'

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

let button1 = document.querySelector('button');

let items = document.querySelector('#item');

let outPut = document.querySelector('.output');

button1.addEventListener('click', function () {
    createItem(items);
    
})


function createItem(item) {
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray));
        // location.reload()
    displayList();

}

function displayList() {
    for (let i = 0; i < itemsArray.length; i++) {
        const isChecked = itemsArray[i].checked ? 'checked' : '';
        outPut.innerHTML += `<div class='output' ><label><input type="checkbox" onchange=clicked(event) name="${itemsArray[i]}">${itemsArray[i]}</label></div>` 
    }


}

function clicked() {
    let itemName  = event.target.name;
    const isChecked = event.target.checked;

    let  itemIndex = itemsArray.find(item => item.name === itemName);
    if (itemIndex > -1) {
        itemsArray[itemIndex].checked = isChecked;
        localStorage.setItem('items', JSON.stringify(itemsArray[itemIndex].checked));
    }

}

console.log(itemsArray);

console.log(document.body)
window.onload = displayList;