import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    const { name, image, type } = this.props
    return (
      <div className="card">
        <p className="name">{ name }</p>
        <img className="img" src={ image } alt={ `Imagem ${name}` } />
        <p className="type">{ type }</p>
      </div>
    )
  }
}

export default Card