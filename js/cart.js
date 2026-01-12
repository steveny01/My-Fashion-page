const cart = [];

    function addToCart(productName) {
      cart.push(productName);
      displayCart();
    }

    function displayCart() {
      const cartList = document.getElementById('cart-items');
      cartList.innerHTML = '';
      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${item}`;
        cartList.appendChild(li);
      });
    }