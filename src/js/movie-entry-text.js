import React, { Component } from 'react';
import '../css/movie-entry-text.css';

class MovieEntryText extends Component {
  render() {
    return (
      <div className="movie-entry-text-body">
        <div>{this.props.name}</div>
        <div>{this.props.release}</div>
      </div>
    );
  }
}

export default MovieEntryText;
