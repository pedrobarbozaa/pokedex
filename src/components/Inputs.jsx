import React from "react";
import "./style.css";

class Inputs extends React.Component {


  render() {
    const { handleSearch, searchInput, onChange } = this.props;
    return (
      <form onSubmit={ handleSearch }>
        <input type="search" name="searchInput" placeholder="Nome do Pokemon" onChange={ onChange } value={ searchInput }/>
        <button type="submit" >Pesquisar</button>
      </form>
      
    )
  }
}

export default Inputs