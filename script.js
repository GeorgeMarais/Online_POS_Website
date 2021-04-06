const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const checkout = document.querySelector(".order-calc");

const menuContent = `
  <button class="menu-btn" onclick="dashboard()" value="food" autofocus style="outline: none;">Dashboard</button>
  <button class="menu-btn" onclick="foodScreen()" value="food">Food</button>
  <button class="menu-btn" onclick="drinksScreen()" value="drinks">Drinks</button>
  <button class="menu-btn" onclick="orderScreen()" value="order">Order</button>
  <img src="./components/icons/cog.svg" id="cogIcon"><button class="settings-btn" onclick="settingsScreen()" value="settings">Settings</button> 
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
  <div class="next-btn-container"><button class="next-btn">Next</button></div>
`;

const foodContent = `
  <div class="next-btn-container"><button class="next-btn">Next</button></div>
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
  <div class="next-btn-container"><button class="next-btn">Next</button></div>
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

const dashboardContent = `
  
`;

menu.innerHTML = menuContent;

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

window.onload = function dashboard(){
  content.innerHTML = dashboardContent;
}