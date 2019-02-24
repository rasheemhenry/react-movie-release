import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import MovieList from './movie-list';

class App extends Component {
  render() {
    return (
      <fragment>
        <MovieList />
      </fragment>
    );
  }
}

export default App;
