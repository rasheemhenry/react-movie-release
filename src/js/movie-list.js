import React, { Component } from 'react';
import '../css/movie-list.css';
import MovieEntry from './movie-entry';

class MovieList extends Component {
  render() {
    console.log(Entries);
    return (
      <div className="movie-list-body">
        <Entries movies={movies} />
      </div>
    );
  }
}

const movies = [
    {
        id: 1,
        name: 'Polar',
        img: 'dsdf',
        release: 'Jan 25, 2019',
    },
    {
        id: 2,
        name: 'Close',
        img: 'dsdf',
        release: 'Jan 18, 2019',
    },    
    {
        id: 3,
        name: 'Captain Marvel',
        img: 'dsdf',
        release: 'March 8, 2019',
    },    
    {
        id: 4,
        name: 'Avengers',
        img: 'dsdf',
        release: 'April 26, 2019',
    },
];

const Entries = ({movies}) => (
    <div>
        {movies.map(movie => (
            <MovieEntry 
                className='movie' 
                key={movie.id}
                name={movie.name}
                img={movie.img}
                release={movie.release}
            />
        ))}
    </div>
);
export default MovieList;
