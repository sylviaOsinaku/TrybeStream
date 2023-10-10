import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import classes from "./TrendHeader.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { CircleLoader } from "react-spinners";
import DotLoader from "react-spinners/DotLoader";
function TrendMovie() {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [trendDate, setTrendDate] = useState("day");
  const [isLoading, setIsLoading] = useState(false);

  const getTrendDate = (e) => {
    setTrendDate(e.target.value);
  };
  const getTrendingMovies = useCallback(
    async function () {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/${trendDate}?language=en-US&page=1`,
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
        console.log("themovis:", theMovies);
        const { results, total_pages } = theMovies;
        console.log("movie Resuklts", results);
        console.log("total_pages", total_pages);

        setTrendingMovies(results);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    },
    [trendDate]
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getTrendingMovies();
    }
    return () => (mounted = false);
  }, [getTrendingMovies]);

  return (
    <div>
      <header className={classes["TrendMovie-header"]}>
        <div className={classes["trend-movie-text-wrapper"]}>
          <h1>Trending</h1>
          <span>Movie</span>
        </div>
        <div className={classes["select-wrapper"]}>
          <select name="trend_date" id="trendDate" onChange={getTrendDate}>
            <option value="day">Day</option>
            <option value="week">Week</option>
          </select>
          <Link to={`trendingmovies`}>See More</Link>
        </div>
      </header>
      {console.log("movies in the trending movies:", TrendingMovies)}
      {isLoading ? (
        <div className={classes["spinner-wrapper"]}>
          <ClipLoader size={"50"} color="#d63686" />
        </div>
      ) : (
        <TrendCard moviesOrSeries={TrendingMovies} />
      )}
    </div>
  );
}

export default TrendMovie;
