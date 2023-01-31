const select = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);


let cart = []
let bagQtt = 1;
let modalKey = 0;



const openModalWindow = () => {
    select('.modalWindow').style.opacity = 0;
    select('.modalWindow').style.display = 'flex';
    setTimeout(() => {
        select('.modalWindow').style.opacity = 1
    }, 150)
}

const closeModalWindow = () => {
    select('.modalWindow').style.opacity = 0
    setTimeout(() => {
        select('.modalWindow').style.display = 'none'
    }, 500)
}

const btnClose = () => {

    select('.bagInfo--cancelButton').addEventListener('click', closeModalWindow)
}

const fillBagItemsInfo = (bagItem, item, index) => {
    
    bagItem.setAttribute('data-key', index)
    bagItem.querySelector('.item-img img').src = item.img
    bagItem.querySelector('.bag-item--price').innerHTML = `$ ${item.price}`;
    bagItem.querySelector('.bag-item--name').innerHTML = item.name;
    bagItem.querySelector('.bag-item--notes').innerHTML = item.notes;
}

const fillModalInfo = (item) => {


    select('.imgBag img').src = item.img;
    select('.bagInfo h1').innerHTML = item.name;
    select('.bagInfo--notes').innerHTML = item.notes;
    select('.bagInfo--actualPrice').innerHTML = `$ ${item.price}`;
}

const quantity = () => {
    select('.bagInfo--qttadd').addEventListener('click', () =>{
        bagQtt++
        select('.bagInfo--qt').innerHTML = bagQtt
    })

    select('.bagInfo--qttminus').addEventListener('click', () =>{
        if(bagQtt > 1) {
            bagQtt--
            select('.bagInfo--qt').innerHTML = bagQtt
        }
    })

    console.log('.bagInfo--qttadd')
}

const addToCart = () => {
    select('.bagInfo--addButton').addEventListener('click', () => {
        console.log('added')
        let price = (item) => {
            select('.bagInfo--actualPrice').innerHTML = `$ ${item.price}`;
        }

        let bagId = bagsJson.id
        console.log('aqui'+ bagId)

        let key = cart.findIndex( (item) => item.bagId == bagId)
        console.log(key)
        if(key > -1) {
            cart[key].qt += bagQtt
        }else {
            let coffee = {
                bagId,
                qt: bagsJson.id,
                price: bagsJson.price
            }
            cart.push(coffee)
            console.log(coffee)
        }
    })
}

bagsJson.map((item, i) => {

    let bagItem = document.querySelector('.bags .bag-item').cloneNode(true)
    console.log(bagItem)


    select('.bag-area').append(bagItem);

    fillBagItemsInfo(bagItem, item, index);

    bagItem.querySelector('.bag-item a').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou')
        openModalWindow();
        //console.log(openModalWindow)
        fillModalInfo(item);

        select('.bagInfo--qt').innerHTML = bagQtt




    })
    btnClose();



})

quantity();
addToCart();