import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      item: {
        name:  ""
      },
      list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      item: { ...prevState.item, [name]: value }
    }));
  };

  handleSubmit(e) {
    let date = new Date();
    console.log(date.toLocaleString())
    e.preventDefault();
    if(this.state.item.name.trim() !== '') {
      this.setState(prevState => ({
        item: { name: "" },
        list: [...prevState.list, this.state.item]
      }));
    }
  };

  // setting handleDelete to an arrow function one time when the component is created. Inside render and in other functions, this.handleDelete can be passed along without fear because the arrow function preserves the this binding. (Better to use bind)
  // side effect - https://medium.com/@nikolalsvk/loosing-bind-this-in-react-8637ebf372cf
  handleDelete = e => {
    let array = this.state.list
    array.splice(e, 1);
    this.setState({list: array});
  }

  render() {
    return (
      <div>
        <List handleDelete={this.handleDelete} ItemsList={this.state.list}/>
        <AddItem 
          handleChange={this.handleChange}
          item={this.state.item}
          handleSubmit={this.handleSubmit} 
          />
      </div>
    )
  }
}
