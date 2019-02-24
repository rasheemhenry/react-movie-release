import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMovies } from "../actions/index";
import '../../css/movie-list.css';
import MovieEntry from './movie-entry';


class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const { error, loading, movies } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {movies.map(movie =>
                    <MovieEntry 
                        className='movie' 
                        key={movie.id}
                        name={movie.name}
                        img={movie.img}
                        release={movie.release}
                    />
                )}
            </div>
        );
        // return (
        // <div className="movie-list-body">
        //     <Entries movies={movies} />
        // </div>
        // );
    }
}

// const movies = [
//     {
//         id: 1,
//         name: 'Polar',
//         img: 'dsdf',
//         release: 'Jan 25, 2019',
//     },
//     {
//         id: 2,
//         name: 'Close',
//         img: 'dsdf',
//         release: 'Jan 18, 2019',
//     },    
//     {
//         id: 3,
//         name: 'Captain Marvel',
//         img: 'dsdf',
//         release: 'March 8, 2019',
//     },    
//     {
//         id: 4,
//         name: 'Avengers',
//         img: 'dsdf',
//         release: 'April 26, 2019',
//     },
// ];

// const Entries = ({movies}) => (
//     <div>
//         {movies.map(movie => (
//             <MovieEntry 
//                 className='movie' 
//                 key={movie.id}
//                 name={movie.name}
//                 img={movie.img}
//                 release={movie.release}
//             />
//         ))}
//     </div>
// );

const mapStateToProps = state => ({
    movies: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error
});

export default connect(mapStateToProps)(MovieList);
