import React from 'react';
import '/home/pedro/code/projetos/projeto1/src/components/style.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/details/:id" component={ Details } />
          <Route exact path="/" component={ Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
