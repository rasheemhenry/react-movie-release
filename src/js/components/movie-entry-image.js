import React, { Component } from 'react';
import '../../css/movie-entry-image.css';

class MovieEntryImage extends Component {
  render() {
    return (
      <div className="movie-entry-image-body">
        <img className='movie-image' src={this.props.imgSrc} />
      </div>
    );
  }
}

export default MovieEntryImage;
