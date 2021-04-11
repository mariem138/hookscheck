import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    let movie = movies.map(el => <MovieCard el={el} />)
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {movie}
        </div>
    )
}

export default MovieList;
