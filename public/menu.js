


let menu = [];
const addBtn = document.querySelector('#addbtn');
let inputItem = document.querySelector('#menu-item')
let inputPrice = document.querySelector('#price-item')
const ul = document.querySelector('#ul')

console.log()


addBtn.addEventListener('click', (e) => {

    let item = {
        itemName: inputItem.value,
        itemPrice: inputPrice.value
    };
    let li = document.createElement("li")
    menu.push(item);
    for (let i = 0; i < menu.length; i++) {

        ul.appendChild(li);

        li.textContent = `${menu[i].itemName}- ${menu[i].itemPrice}$`;

    }

    li.classList.add('oneItem')


    e.preventDefault()

    li.addEventListener('mouseover', () => {
        li.classList.add('hovred')
    })

    li.addEventListener('mouseout', () => {
        li.classList.remove('hovred')
    })

    li.addEventListener('click', () => {
        let itemI = menu.indexOf(item)
        if (itemI > -1) {
            li.remove()
            menu.splice(itemI, 1);
        }
        // console.log(itemI)
        // console.log(menu)

    })


})

let allItem = document.querySelector('.oneItem')





//allItem.addEventListener('hover', () => {
 //  allItem.classList.add('hovred')
//})

//allItem.addEventListener('click', (e) => {

//})
