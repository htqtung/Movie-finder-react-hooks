import React from 'react';
import logo from '../imdb_logo.png';

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <div className="movie-info">
                <p>({movie.Year})</p>
                <a href={`https://www.imdb.com/title/${movie.imdbID}`} 
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={logo} className="imdb-logo" alt="imdb link"/>
                </a>
            </div>
        </div>
    );
};

export default Movie;