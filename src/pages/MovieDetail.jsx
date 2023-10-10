import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import DetailedMovie from "../components/Details/DetailedMovie";
function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCasts, setMovieCasts] = useState(null);

  const getTrendingMovies = useCallback(
    async function () {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBhYTU5MTU0YzQ5MDgwMGU1OGM4ZmFjZGRjOTY2YyIsInN1YiI6IjY0NzliOGU2ZTMyM2YzMDBhN2Q0ZTcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fg3OBEqMzOlMwGwkHJZO7Un-ReTWYVt9LIp3gP0dfhE",
        },
      };
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          options
        );
        if (!movieResponse.ok) {
          console.log("Http error detected", movieResponse.status);
          throw new Error("Error Found");
        }

        console.log(movieResponse);
        const theMovies = await movieResponse.json();
        const theCasts = await castResponse.json();
        console.log(theMovies);
        setMovieDetails(theMovies);
        setMovieCasts(theCasts);
      } catch (err) {
        console.log(err);
      }
    },
    [movieId]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getTrendingMovies();
    }
    return () => (mounted = false);
  }, [getTrendingMovies]);
  return (
    <>
      {movieDetails ? (
        <DetailedMovie movieDetails={movieDetails} movieCasts={movieCasts} />
      ) : (
        <p>Loding...s</p>
      )}
    </>
  );
}

export default MovieDetail;
