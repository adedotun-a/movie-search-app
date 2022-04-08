import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          img={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://www.reelviews.net/resources/img/default_poster.jpg"
          }
          title={movie.Title}
          text={movie.Year}
          label="Watch"
        />
      ))}
    </>
  );
};

export default MovieList;
