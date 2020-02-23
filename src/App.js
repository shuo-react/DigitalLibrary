import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './hoc/header';
import Books from './features/books/books';
import Movies from './features/movies/movies';
import Musics from './features/musics/musics';

import './App.css';

// class component => statefull component
// function component => stateless

class App extends React.Component {
  render() {

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/books" exact component={Books} />
          <Route path="/musics" exact component={Musics} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/" component={Books} />
        </Switch>

      </div>
    );
  }
}

export default App;
