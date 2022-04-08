import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Heading from "./components/Heading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("Rogue One");

  const searchMovie = async () => {
    const searchUrl = `http://www.omdbapi.com/?s=${searchTitle}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

    const response = await fetch(searchUrl);
    const responseJson = await response.json();

    responseJson.Search ? setMovies(responseJson.Search) : setMovies([]);
  };

  useEffect(() => {
    searchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTitle]);

  return (
    <>
      <div className="container-fluid poster-carousel">
        <Heading title="Moogle" />
        <SearchBox value={searchTitle} setValue={setSearchTitle} />
        <div className="row  justify-content-center">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
