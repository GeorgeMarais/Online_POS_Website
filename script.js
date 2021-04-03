const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

const menuContent = `
  <h1>Menu</h1>
  <hr>
  <button class="menu-btn" onclick="selectScreen()" value="order">Order</button>
  <button class="menu-btn" onclick="selectScreen()" value="food">Food</button>
  <button class="menu-btn" onclick="selectScreen()" value="drinks">Drinks</button>
  <button class="menu-btn" onclick="selectScreen()" value="settings">Settings</button> 
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

const foodContent = `
  <div class="work-feature-block row">
    <div class="columns medium-7">
      <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
    </div>
    <div class="columns medium-5">
      <h2 class="work-feature-block-header">Project Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
      <h2>Project Details</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  </div>
`;

const drinksContent = `
<div class="work-feature-block row">
<div class="columns medium-7">
  <img class="work-feature-block-image" src="https://placehold.it/600x400"/>
</div>
<div class="columns medium-5">
  <h2 class="work-feature-block-header">Project Description</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales diam ac hendrerit aliquet. Phasellus pretium libero vel molestie maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis est quam. Aenean blandit a urna laoreet tincidunt.</p>
  <h2>Project Details</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</div>
</div>
`;

const settingsContent = `

`;

menu.innerHTML = menuContent;

function selectScreen(){
  var screen = $("button").val();

  switch (screen){
    case "order":
      content.innerHTML = orderContent;
      break;
      case "food":
      content.innerHTML = foodContent;
      break;
      case "drinks":
      content.innerHTML = drinksContent;
      break;
      case "settings":
      content.innerHTML = settingsContent;
      break;
    default:
      console.log("Could not find screen");
      break;
  }
}