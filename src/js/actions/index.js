// import { 
//     ADD_ARTICLE,
//     FETCH_MOVIES_BEGIN,  
//     FETCH_MOVIES_SUCCESS,
//     FETCH_MOVIES_FAILURE
// } from "../constants/action-types";

export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

function getMovies() {
    return fetch("/movies")
        .then(handleErrors)
        .then(res => res.json());
}

function fakeGetMovies() {
    return new Promise(resolve => {
      // Resolve after a timeout so we can see the loading indicator
      setTimeout(
        () =>
            resolve({
                movies: [
                {
                    id: 0,
                    name: "Polar",
                    release: 'Jan 25, 2019',
                },
                {
                    id: 1,
                    name: "Close",
                    release: "Jan 18, 2019",
                },
                {
                    id: 2,
                    name: "Captain Marvel",
                    release: "March 8, 2019",
                },
                {  
                    id: 3,
                    name: "Avengers",
                    release: "April 26, 2019",
                },
                ]
            }),
        1000
      );
    });
}

export function fetchMovies() {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fakeGetMovies()
            .then(json => {
                dispatch(fetchMoviesSuccess(json.movies));
                return json.movies;
            })
            .catch(error => 
                dispatch(fetchMoviesFailure(error))
            );
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return Response;
}

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});
