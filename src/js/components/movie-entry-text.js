import React, { Component } from 'react';
import '../../css/movie-entry-text.css';

const MovieEntryText = ({ name, release }) => {
    return (
        <div className="movie-entry-text-body">
            <div>{name}</div>
            <div>{release}</div>
        </div>
    );
};

export default MovieEntryText;