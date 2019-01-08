var GroceryList = (props) => (
  <ul>
  {props.items.map(item =>
    <GroceryListItem item={item} />
  )}
</ul> 
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }
  // OnListItemCLick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }

  OnListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  OnListItemLeave() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      // textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.done ? 'bold' : 'none'
    };
      
    return (
      <li style={style} onMouseLeave={this.OnListItemLeave.bind(this)} onMouseEnter={this.OnListItemHover.bind(this)}>{this.props.item}</li>
    )
  };
};

var App = () => (
  <div>
    <h2>My Grocery List</h2>
     <GroceryList items={['Cheese', 'Strawberries', 'Avocados']}/>
  </div> 
);

ReactDOM.render(<App/>, document.getElementById('app'));

