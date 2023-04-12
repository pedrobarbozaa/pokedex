import React from 'react';
import '/home/pedro/code/projetos/projeto1/src/components/style.css';
import Card from './components/Card'
import Inputs from './components/Inputs'

class App extends React.Component {
  state = {
    name: '',
    image: '',
    type: '',
    loading: true,
  }

  componentDidMount() {
    this.populateState();
  }

  fetchPoke = async (pokemon) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await result.json();
    return data;
  }

  populateState = async () => {
    const data = await this.fetchPoke('venusaur')
    const types = data.types.map((each) => `${each.type.name.toUpperCase()} `)
    this.setState({
      name: data.name.toUpperCase(),
      image: data.sprites.front_default,
      type: types,
      loading: false,
    })
  }

  handleSearch = (event) => {
    const { target } = event;
    const { value } = target;
    this.populateState(value);
    console.log(value);
  }


  render() {
    const { name, loading, image, type } = this.state
    return (
      <>
      <h1>Pokedex</h1>
      <Inputs handleSearch={this.handleSearch} />
      { loading ? <p>Carregando...</p> : <Card name={ name } image={ image } type={ type }/> }
      </>
    )
  }
}

export default App;
