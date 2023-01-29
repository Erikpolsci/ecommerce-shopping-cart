bagsJson.map((item, i) =>{
    
    let bagItem = document.querySelector('.bags .bag-item').cloneNode(true)
    console.log(bagItem)

    document.querySelector('.bag-area').append(bagItem);

    bagItem.querySelector('.item-img img').src = item.img
    bagItem.querySelector('.bag-item--price').innerHTML = `$ ${item.price}`;
    bagItem.querySelector('.bag-item--name').innerHTML = item.name;
    bagItem.querySelector('.bag-item--notes').innerHTML = item.notes;

    bagItem.querySelector('.bag-item a').addEventListener('click',(e) =>{
        e.preventDefault()
        console.log('clicou')

        document.querySelector('.modalWindow').style.display = 'flex'
        document.querySelector('.imgBag img').src = item.img;
        document.querySelector('.bagInfo h1').innerHTML = item.name;
        document.querySelector('.bagInfo--notes').innerHTML = item.notes;
        document.querySelector('.bagInfo--actualPrice').innerHTML = `$ ${item.price}`;


    })

    document.querySelector('.bagInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.modalWindow').style.display = 'none'


    })

    



    






    
})