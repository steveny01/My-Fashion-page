// const cart = [];

//     function addToCart(productName) {
//       cart.push(productName);
//       displayCart();
//     }

//     function displayCart() {
//       const cartList = document.getElementById('cart-items');
//       cartList.innerHTML = '';
//       cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${index + 1}. ${item}`;
//         cartList.appendChild(li);
//       });
//     }
let cart = [];

// Load cart from localStorage
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem('myCart'));
  if (saved) cart = saved;
  displayCart();
};

// Updated addToCart function with optional price
function addToCart(productName) {
  cart.push({ name: productName });
  saveCart();
  displayCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  displayCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('myCart', JSON.stringify(cart));
}

// Display cart items
function displayCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  if (cart.length === 0) {
    cartList.innerHTML = '<li>Your cart is empty</li>';
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${index + 1}. ${item.name}
      <button onclick="removeFromCart(${index})" style="margin-left:10px;background:red;color:white;border:none;padding:2px 5px;border-radius:3px;">X</button>
    `;
    cartList.appendChild(li);
  });
}

// 🌟 Share cart items via WhatsApp
function shareCart() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hey! Check out my selected products from Voboss Couture:\n\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
  });

  const encodedMessage = encodeURIComponent(message);

  // WhatsApp link (opens WhatsApp app or web)
  const whatsappURL = `https://wa.me/2349039645888?text=${encodedMessage}`;

  // Open in new tab/window
  window.open(whatsappURL, "_blank");
}