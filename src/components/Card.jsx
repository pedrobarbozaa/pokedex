import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { name, image, type, className, cardId } = this.props
    return (
      <Link to={ `/details/${cardId}`} style={{ textDecoration: 'none' }}>
        <div className={className}>
          <p className="name">{ name }</p>
          <img className="img" src={ image } alt={ `Imagem ${name}` } />
          <p className="type">{ type }</p>
        </div>
      </Link>
    )
  }
}

export default Card