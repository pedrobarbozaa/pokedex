import React from "react";
// import "./style.css";

class Details extends React.Component {
  render() {
    const { name, image, type, save, className } = this.props
    return (
      <div onClick={save} className={className}>
        {/* <p className="name">{ name }</p>
        <img className="img" src={ image } alt={ `Imagem ${name}` } />
        <p className="type">{ type }</p> */}
        <p>TESTE</p>
      </div>
    )
  }
}

export default Details