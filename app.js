let phone = [{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
}
];
let localStorageitems = JSON.parse(localStorage.getItem('cartItems'));
let cartItems = [];

if(localStorageitems === null){
    cartItems = [];
}else{
    cartItems = [...localStorageitems];
}

const item = document.querySelector('#item');

phone.map((items, index) => {
    item.innerHTML += `<div class="bg-slate-800 text-white text-md text-bold rounded border-solid border-2 border-gray-200 p-5">
    <img src="" alt="">
    <h3>Brand: ${items.brand}</h3>
    <h3>Model: ${items.model}</h3>
    <h3>RAM: ${items.ram}</h3>
    <h3>ROM: ${items.rom}</h3>
    <h3>Camera: ${items.camera}</h3>
    <h3>Price: ${items.price}</h3>
    <button onclick = "addTocart(${index})" class="bg-teal-900 text-white text-sm px-2 py-1 rounded border-solid border-2 border-gray-200 mt-3">Add to cart</button>
  </div>`
});

function addTocart(index) {
    if (cartItems.indexOf(phone[index]) !== -1) {
        let indexNumber = cartItems.indexOf(phone[index]);
        cartItems[indexNumber].quantity += 1;
        console.log(cartItems);
    }
    else {
        phone[index].quantity = 1;
        cartItems.push(phone[index]);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your item has been saved",
            showConfirmButton: false,
            timer: 2000
          });
        console.log(cartItems);
    }
}

function checkout(){
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location = 'checkout.html';
}