bagsJson.map((item, i) =>{
    
    let bagItem = document.querySelector('.bags .bag-item').cloneNode(true)
    //console.log(bagItem)

    document.querySelector('.bag-area').append(bagItem);

    bagItem.querySelector('.item-img img').src = item.img;
    bagItem.querySelector('.bag-item--price').innerHTML = `$ ${item.price}`;
    bagItem.querySelector('.bag-item--name').innerHTML = item.name;
    bagItem.querySelector('.bag-item--notes').innerHTML = item.notes;



    
})