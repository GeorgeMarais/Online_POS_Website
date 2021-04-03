const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

const menuContent = `
  <h1>Menu</h1>
  <hr>
  <button class="menu-btn" onclick="selectScreen()" value="order">Order</button>
  <button class="menu-btn" onclick="selectScreen()" value="order">2</button>
  <button class="menu-btn" onclick="selectScreen()" value="order">3</button>
  <button class="menu-btn" onclick="selectScreen()" value="order">4</button> 
  <div class="version"><p style="padding-left: 8%; padding-top: 1.5%;">Ver 1.0.0</p></div>
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

menu.innerHTML = menuContent;

function selectScreen(){
  let screen = $("button").val();

  switch (screen){
    case "order":
      content.innerHTML = orderContent;
      break;
    default:
      console.log("Could not find screen");
      break;
  }
}