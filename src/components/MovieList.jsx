import React from "react";
import Card from "./Card";

// Movie ist component that displays all movies from the search using the Card component
const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <Card
          key={movie.imdbID}
          img={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://www.reelviews.net/resources/img/default_poster.jpg"
          }
          title={movie.Title}
          content={movie.Year}
          label="Watch"
        />
      ))}
    </>
  );
};

export default MovieList;
