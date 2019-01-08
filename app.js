var GroceryList = (props) => (
 <ul> 
   <li>{props.items[0]}</li>
   <li>{props.items[1]}</li>
   <li>{props.items[2]}</li>
 </ul>
);

var GroceryListItem = () => (
  <div>
    <h2>My Grocery List</h2>
     <GroceryList items={['Cheese', 'Strawberries', 'Avocados']}/>
  </div>
  
);


ReactDOM.render(<GroceryListItem/>, document.getElementById('app'));