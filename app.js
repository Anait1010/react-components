var GroceryList = () => (
 <ul> 
   <li><Cheese/></li>
   <li><Strawberries/></li>
 </ul>
);

var Cheese = () => (
  <div>Cheese</div>
);
var Strawberries = () => (
  <div>Strawberries </div>
);


ReactDOM.render(<GroceryList/>, document.getElementById('app'));