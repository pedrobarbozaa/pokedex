import React from "react";
// import "./style.css";
import { fetchDescription, fetchPoke } from "../services/apiRequests"

class Details extends React.Component {
  state = {
    data: {},
    loading: false,
    name: '',
    image: '',
    types: [],
    description: '',
  }
  
  componentDidMount() {
    const { match: { params: {id} } } = this.props
    this.populateState(id);
  }

  handleLoading = (value) => {
    this.setState({
      loading: value,
    })
  }

  populateState = async (id) => {
    this.handleLoading(true);
    const data = await fetchPoke(id);
    const description = await fetchDescription(id);
    this.setState({
      data,
      name: data.name,
      description: description.flavor_text_entries.find((el) => el.language.name === 'en')?.flavor_text,
      image: data.sprites.other["official-artwork"].front_default,
      type: data.types.map((el) => el.type.name),
      loading: false,
    })
  }

  render() {
    const { loading, name, image, type, description } = this.state

    return (
      <>
      { loading ? <p>CARREGANDO</p> :
      <section className="descriptionSection">
        <div className="descriptionCard">
          <p className="name">{ name }</p>
          <img className="img" src={ image } alt={ `Imagem ${name}` } />
        </div>
         <div className="descriptionInfo">
          { type?.map((el, i) => <p key={ i }>{ el }</p> ) }
          <p>{description}</p>
        </div>
      </section>
      }
      </>
    )
  }
}

export default Details