import React from "react";
import '../css/MovieCard.css';
import { useMovieContext } from "../contexts/MovieContext";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();

  // Ensure movie.id exists and isFavorite returns boolean
  const favorite = movie?.id && isFavorite ? isFavorite(movie.id) : false;

  function onFavorite(e) {
    e.preventDefault();
    if (!movie?.id) return;

    if (favorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
