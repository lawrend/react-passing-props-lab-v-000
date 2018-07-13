
import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null,
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }
  componentDidMount() {

    fetch('/api/fruit').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        fruit: data,
      })
    })
    fetch('/api/fruit_types').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        filters: data,
      })
    })
  };

  handleFilterChange = event => {
    // let allFruit = this.getFruit();
    // this.setState({
    //   fruit: allFruit,
    // })
    console.log('new filter: ', event.target.value);
    // let currentFruit = this.state.fruit;
    // let newFruitSort = currentFruit.filter(i => i.fruit_type === event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    console.log(this.state.fruit);
    return (
      <div>
        <FruitBasket updateFilterCallback={this.handleFilterChange} filters={this.state.filters} fruit={this.state.fruit} currentFilter={this.state.currentFilter} />
      </div>
    )
  }
}

export default App;
