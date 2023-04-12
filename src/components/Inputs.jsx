import React from "react";
import "./style.css";

class Inputs extends React.Component {
  render() {
    const { handleSearch } = this.props
    return (
      <form>
        <input type="search" onChange={ handleSearch } placeholder="Nome do Pokemon" />
        {/* <input type="submit" value="Pesquisar" /> */}
      </form>
      
    )
  }
}

export default Inputs