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
    searchInput: ''
  }
  componentDidMount() {
    this.populateState(Math.floor(Math.random() * 1010));
  }
  
  fetchPoke = async (pokemon) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    const data = await result.json();
    return data;
  }
  
  populateState = async (value) => {
    const data = await this.fetchPoke(value)
    const types = data.types.map((each) => `${each.type.name.toUpperCase()} `)
    this.setState({
      name: data.name.toUpperCase(),
      image: data.sprites.front_default,
      type: types,
      loading: false,
    })
  }
  
  handleSearch = (event) => {
    const { searchInput } = this.state
    event.preventDefault()
    this.populateState(searchInput);
  }
  
  onChange = (event) => {
    const { target: {name, value} } = event
    this.setState({
      [name]: value, 
    })
  }
  
  render() {
    const { name, loading, image, type, searchInput } = this.state
    return (
      <>
      <h1>Pokedex</h1>
      <Inputs onChange={this.onChange} handleSearch={this.handleSearch} searchInput={searchInput} />
      { loading ? <p>Carregando...</p> : <Card name={ name } image={ image } type={ type }/> }
      </>
    )
  }
}

export default App;
