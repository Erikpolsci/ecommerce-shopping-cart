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

const fillBagItemsInfo = (bagItem, item, i) => {
    
    bagItem.setAttribute('data-key', i)
    bagItem.querySelector('.item-img img').src = item.img
    bagItem.querySelector('.bag-item--price').innerHTML = `$ ${item.price}`;
    bagItem.querySelector('.bag-item--name').innerHTML = item.name;
    bagItem.querySelector('.bag-item--notes').innerHTML = item.notes;
}

const getKey = (e) => {
    let key = e.target.closest('.bag-item').getAttribute('data-key')
    bagQtt = 1
    modalKey = key;

    return key

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
        let price = select('.bagInfo--actualPrice').innerHTML.replace('$', '');
        

        let bagId = bagsJson[modalKey].id

        let key = cart.findIndex( (i) => i.bagId == bagId)
        console.log(key)
        if(key > -1) {
            cart[key].qt += bagQtt
        }else {
            let coffee = {
                bagId,
                id:bagsJson[modalKey].id,
                qt: bagQtt,
                price: parseFloat(price)
            }
            cart.push(coffee)
            console.log(coffee)
        }
        closeModalWindow()
        openCart()
        updateCart()
    })
}

const openCart = () => {
    console.log('cart items' + cart.length)
    if(cart.length > 0) {
        select('aside').classList.add('show')
        select('header').style.display = 'flex'
    }

    select('.main-menu').addEventListener('click', () => {
        if(cart.length > 0){
            select('aside').classList.add('show')
            select('aside').style.left = '0'
        }
    })
}

const closeCart = () => {

}

const updateCart = () => {
    select('.main-menu span').innerHTML = cart.length

    if(cart.length > 0) {
        select('aside').classList.add('show')

        select('.cart').innerHTML = ''
    

    let amount = 0
    let totalamount = 0

        for(let i in cart){
            let bagItem = bagsJson.find( (item) => item.id == cart[i].id)
            console.log('AQUIMERDA' + bagItem)

            amount += cart[i].price * cart[i].qt

            let cartItem = select('.bags .cart--item').cloneNode(true)
            select('.cart').append(cartItem)

            let bagName = `${bagItem.name}`

            cartItem.querySelector('img').src = bagItem.img
            cartItem.querySelector('.cart-item--name').innerHTML = bagName
            cartItem.querySelector('.cart-qtt').innerHTML = cart[i].qt

            cartItem.querySelector('.cart-item-qttadd').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            cartItem.querySelector('.cart-item-qttminus').addEventListener('click', () => {
                if(cart[i].qt > 1){
                    cart[i].qt--
                }else{
                    cart.splice(i, 1)
                }
                (cart.length < 1) ? select('.header').style.display = 'flex' : ''
            
                updateCart()
            })
            select('.cart').append(cartItem);
        }

        totalamount = amount 

        select('.total span:last-child').innerHTML = amount
		select('.totalamount span:last-child').innerHTML = totalamount

    } else{
        select('aside').classList.remove('show')
        select('aside').style.left = '100vw'
    }
}


bagsJson.map((item, i) => {

    let bagItem = document.querySelector('.bags .bag-item').cloneNode(true)
    console.log(bagItem)


    select('.bag-area').append(bagItem);

    fillBagItemsInfo(bagItem, item, i);

    bagItem.querySelector('.bag-item a').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou')
        let key = getKey(e);
        openModalWindow();
        //console.log(openModalWindow)
        fillModalInfo(item);

        select('.bagInfo--qt').innerHTML = bagQtt




    })
    btnClose();



})

quantity();
addToCart();