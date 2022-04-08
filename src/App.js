import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Heading from "./components/Heading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("Rogue One");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const searchMovie = async () => {
    const searchUrl = `https://www.omdbapi.com/?s=${searchTitle}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

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
      <div className=" moogle container-fluid">
        <div>
          <Heading title="Moogle" />
          <SearchBox value={searchTitle} setValue={setSearchTitle} />
        </div>

        <div className={isMobile ? "row justify-content-center" : "row"}>
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
