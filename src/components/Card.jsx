import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { name, image, type, save, className, cardId } = this.props
    return (
      <div>
      <div onClick={save} className={className}>
        <p className="name">{ name }</p>
        <img className="img" src={ image } alt={ `Imagem ${name}` } />
        <p className="type">{ type }</p>
      </div>
        <Link to={ `/details/${cardId}` }>
        <button>Detalhes</button>
        </Link>
      </div>
    )
  }
}

export default Card