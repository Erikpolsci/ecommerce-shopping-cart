const select = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);

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

const fillBagItemsInfo = (bagItem, item) => {
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



bagsJson.map((item, i) => {

    let bagItem = document.querySelector('.bags .bag-item').cloneNode(true)
    console.log(bagItem)


    select('.bag-area').append(bagItem);

    fillBagItemsInfo(bagItem, item);

    bagItem.querySelector('.bag-item a').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou')
        openModalWindow();
        //console.log(openModalWindow)
        fillModalInfo(item);





    })
    btnClose();














})