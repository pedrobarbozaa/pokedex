import React from "react";
// import "./style.css";
import { fetchPoke } from "../services/apiRequests"

class Details extends React.Component {
  state = {
    data: {},
    loading: false,
    name: '',
    image: '',
    types: [],
  }
  
  componentDidMount() {
    const { match: { params: {id} } } = this.props
    this.populateState(id);
  }

  populateState = async (id) => {
    const data = await fetchPoke(id)
    this.setState({
      data,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      type: data.types.map((el) => el.type.name),
      loading: false,
    })
  }

  render() {
    const { loading, name, image, type, data } = this.state

    return (
      <section>
        <div>
          <p className="name">{ name }</p>
          <img className="img" src={ image } alt={ `Imagem ${name}` } />
        </div>
        { type?.map((el, i) => <p key={ i }>{ el }</p> ) }
        <p>{data.description}</p>
      </section>
    )
  }
}

export default Details