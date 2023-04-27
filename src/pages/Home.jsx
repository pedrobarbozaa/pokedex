import React from "react";
import "../components/style.css";
import Card from '../components/Card'
import Inputs from '../components/Inputs'
import { fetchPoke } from "../services/apiRequests";

class Home extends React.Component {
  state = {
    data: {},
    name: '',
    image: '',
    types: '',
    loading: true,
    searchInput: '',
    savedCards: [],
  }
  componentDidMount() {
    this.populateState(Math.floor(Math.random() * 1010));
  }
  
  populateState = async (value) => {
    const data = await fetchPoke(value)
    const types = data.types.map((each) => `${each.type.name.toUpperCase()} `)
    this.setState({
      data,
      name: data.species.name.toUpperCase(),
      image: data.sprites.front_default,
      types,
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

  saveCard = () => {
    const { data, name, image, types, savedCards } = this.state;
    const savedObj = { data, name, image, types }
    savedCards.some((el) => el.data.id === savedObj.data.id) ? 
    alert(`${savedObj.name} já está salvo`):
    this.setState({
      savedCards: [...savedCards, savedObj]
    })
  }
  
  render() {
    const { name, loading, image, types, searchInput, savedCards, data } = this.state
    return (
      <>
        <Inputs onChange={this.onChange} handleSearch={this.handleSearch} searchInput={searchInput} />
        { loading ? <p>Carregando...</p> : 
        <div>
          <Card className="card" name={ name } image={ image } type={ types } cardId={ data.id } />
          <button type="button" onClick={ this.saveCard }>Favorito</button> 
        </div>
        }
          <h3>Favoritos</h3>
        <div className="cardList">
          { savedCards.map((card) => <Card className="savedCard" key={card.data.id} cardId={ card.data.id } name={ card.name } image={ card.image } type={ card.types }/>  ) }
        </div>
      </>
    )
  }
}

export default Home