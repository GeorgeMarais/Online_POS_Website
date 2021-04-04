const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const checkout = document.querySelector(".order-calc");

const menuContent = `
  <h1>Menu</h1>
  <hr>
  <button class="menu-btn" onclick="orderScreen()" value="order">Order</button>
  <button class="menu-btn" onclick="foodScreen()" value="food">Food</button>
  <button class="menu-btn" onclick="drinksScreen()" value="drinks">Drinks</button>
  <button class="menu-btn" onclick="settingsScreen()" value="settings">Settings</button> 
  <div class="version"><p style="padding-left: 8%; padding-top: 1.5%;">Ver 1.0.0</p></div>
`;

const order_calcContent = `
  <button type="button" class="shopping-cart-button float-right" data-toggle="shopping-cart-dropdown">
    <i class="fa fa-shopping-cart"></i>
    <span class="text">Shopping Cart (3)</span>
  </button>
  <div class="shopping-cart-dropdown-pane">
    <div class="dropdown-pane bottom " id="shopping-cart-dropdown" data-dropdown data-hover="true" data-hover-pane="true">
      <div class="shopping-cart-item">
        <img src="https://placeimg.com/60/80/any">
        <div class="shopping-cart-item-name">
          <a>Style & Co Knit Blazer</a>
          <p><span class="shopping-cart-title">Color: </span>Blue</p>
          <p><span class="shopping-cart-title">Size: </span>M</p>
        </div>
        <div class="shopping-cart-item-price">
          <p class="shopping-cart-title">$24.99</p>
          <a href="#">Remove</a>
        </div>
      </div>
    </div>
`;

const orderContent = `
  <head><h2>Order</h2></head>
  <div class="item-table">
    <table>
      <tr>
        <th>Item<th>
        <th>Qty<th>
        <th>Price<th>
      </tr>
    </table>
  </div>
  <div class="calc-content">
`;

const foodContent = `
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
  <div class="product-card">
    <div class="product-card-thumbnail">
      <a href="#"><img src="https://placehold.it/180x180"/></a>
    </div>
    <h2 class="product-card-title"><a href="#">Product Name</a></h2>
    <span class="product-card-desc">Product Description</span>
    <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
  </div>
`;

const drinksContent = `
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
<div class="product-card">
<div class="product-card-thumbnail">
  <a href="#"><img src="https://placehold.it/180x180"/></a>
</div>
<h2 class="product-card-title"><a href="#">Product Name</a></h2>
<span class="product-card-desc">Product Description</span>
<span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
</div>
`;

const settingsContent = `

`;

menu.innerHTML = menuContent;
checkout.innerHTML = order_calcContent;

function orderScreen(){
  content.innerHTML = orderContent;
}

function foodScreen(){
  content.innerHTML = foodContent;
}

function drinksScreen(){
  content.innerHTML = drinksContent;
}

function settingsScreen(){
  content.innerHTML = settingsContent;
}