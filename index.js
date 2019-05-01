var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1)) + 1});
  return `${item} has been added to your cart.`
}

function viewCart() {
  var newArray = [];
  
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  
  for (var i = 0; i<cart.length; i++){
    if (i === cart.length-1 && cart.length > 1){
      newArray.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
    } else{
      newArray.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }
  return `In your cart, you have${newArray}.`
}

function total() {
  return cart.reduce(function(total, itemObj){
    return total + itemObj.itemPrice
  }, 0)
  
}

function removeFromCart(item) {
  
  for (var i = 0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      delete cart[i]
    });
    return cart;
  }
  return "Sorry, we don't have a credit card on file for you."
}

function placeOrder(cardNumber) {
  // write your code here
}
