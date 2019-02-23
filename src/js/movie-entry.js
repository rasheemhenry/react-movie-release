import React, { Component } from 'react';
import '../css/movie-entry.css';
import MovieEntryImage from './movie-entry-image';
import MovieEntryText from './movie-entry-text';

class MovieEntry extends Component {
  render() {
    return (
      <div className="movie-entry-body">
        <MovieEntryImage />
        <MovieEntryText
            name={this.props.name}
            release={this.props.release}
        />
      </div>
    );
  }
}

export default MovieEntry;
