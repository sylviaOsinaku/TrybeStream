import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import classes from "./TrendHeader.module.css";
import { ClipLoader } from "react-spinners";
function PopularMovie() {
  const [PopularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPopularMovies = useCallback(async function () {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDBhYTU5MTU0YzQ5MDgwMGU1OGM4ZmFjZGRjOTY2YyIsInN1YiI6IjY0NzliOGU2ZTMyM2YzMDBhN2Q0ZTcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fg3OBEqMzOlMwGwkHJZO7Un-ReTWYVt9LIp3gP0dfhE",
          },
        }
      );
      if (!response.ok) {
        console.log("Http error detected", response.status);
        throw new Error("Error Found");
      }
      setIsLoading(false);
      console.log(response);
      const theMovies = await response.json();
      console.log(theMovies);
      console.log("themovis:", theMovies);
      const { results, total_pages } = theMovies;
      console.log("movie Resuklts", results);
      console.log("total_pages", total_pages);
      setPopularMovies(results);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getPopularMovies();
    }
    return () => (mounted = false);
  }, [getPopularMovies]);

  return (
    <div>
      <header className={classes["TrendMovie-header"]}>
        <div className={classes["trend-movie-text-wrapper"]}>
          <h1>Popular</h1>
          <span>Movie</span>
        </div>
        <div className={classes["select-wrapper"]}>
          <Link to={`PopularMovies`}>See More</Link>
        </div>
      </header>
      {console.log("movies in the trending movies:", PopularMovies)}
      {isLoading ? (
        <div className={classes["spinner-wrapper"]}>
          <ClipLoader size={"50"} color="#d63686" />
        </div>
      ) : (
        <TrendCard moviesOrSeries={PopularMovies} />
      )}
    </div>
  );
}

export default PopularMovie;
