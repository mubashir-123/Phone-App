let items = localStorage.getItem('cartItems');
let data = JSON.parse(items);

const checkoutitem = document.querySelector('#checkout-item');
const total = document.querySelector('.total');

function renderItem(){
  checkoutitem.innerHTML = '';
  data.map((items, index) => {
    checkoutitem.innerHTML += `<div class="bg-slate-800 text-white text-md text-bold rounded border-solid border-2 border-gray-200 p-5">
    <img src="" alt="">
    <h3>Brand: ${items.brand}</h3>
    <h3>Model: ${items.model}</h3>
    <h3>RAM: ${items.ram}</h3>
    <h3>ROM: ${items.rom}</h3>
    <h3>Camera: ${items.camera}</h3>
    <h3>Price: ${items.price * items.quantity}</h3>
    
    <div class = "flex justify-between gap-5 items-center mt-2">
         
    <div><button onclick = "addItem(${index})" class="bg-teal-900 text-white text-sm px-2 py-1 rounded border-solid border-2 border-gray-200 mt-1">+</button></div> 

         <div><h6>Qty: ${items.quantity}</h6></div>

        <div><button onclick = "removeItem(${index})" class="bg-teal-900 text-white text-sm px-2 py-1 rounded border-solid border-2 border-gray-200 mt-1">-</button></div>
        </div> 
  </div>`
});
 const totalAmount = data.reduce((acc,currVal)=>{
      return acc + currVal.price * currVal.quantity;
  },0);
  total.innerHTML = `<h1 class = "text-center text-white font-bold text-lg mt-10">Total: Rs ${totalAmount}</h1>`; 
  
}
renderItem();
console.log(data);
function addItem(index){
    data[index].quantity += 1;
    renderItem();
 }
function removeItem(index){
  if(data[index].quantity === 0){
    data.splice(index,1);
    localStorage.setItem('cartItems',JSON.stringify(data));
    console.log(data);
  }
  else{
      data[index].quantity -= 1;
    }
    renderItem();
 }