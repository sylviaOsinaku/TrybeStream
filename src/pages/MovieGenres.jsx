import React, { useState, useEffect, useCallback } from "react";
import MovieGenreDetails from "../components/generes/MovieGenreDetails";
// import { useParams, Link } from "react-router-dom";

function MovieGenre() {
  const [movieGenres, setmovieGenres] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const getTrendingMovies = useCallback(async function () {
    setIsLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBhYTU5MTU0YzQ5MDgwMGU1OGM4ZmFjZGRjOTY2YyIsInN1YiI6IjY0NzliOGU2ZTMyM2YzMDBhN2Q0ZTcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fg3OBEqMzOlMwGwkHJZO7Un-ReTWYVt9LIp3gP0dfhE",
      },
    };
    try {
      const movieGenereResponse = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      );

      if (!movieGenereResponse.ok) {
        console.log("Http error detected", movieGenereResponse.status);
        throw new Error("Error Found");
      }

      console.log(movieGenereResponse);
      setIsLoading(false);
      const theMovies = await movieGenereResponse.json();
      const { genres } = theMovies;

      setmovieGenres(genres);
      console.log("movieGenres", genres);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getTrendingMovies();
    }
    return () => (mounted = false);
  }, [getTrendingMovies]);
  return (
    <>
      {isLoading ? (
        <p>Loding....</p>
      ) : (
        <MovieGenreDetails genreData={movieGenres} />
      )}
    </>
  );
}
export default MovieGenre;
