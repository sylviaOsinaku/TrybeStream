import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import classes from "./TrendHeader.module.css";
import { ClipLoader } from "react-spinners";
function TrendSeries() {
  const [TrendingSeries, setTrendingSeries] = useState([]);
  const [trendDate, setTrendDate] = useState("day");
  const [isLoading, setIsLoading] = useState(false);

  const getTrendingSeries = useCallback(async function () {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
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
      console.log("Tv Series:", theMovies);
      setTrendingSeries(theMovies?.results);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getTrendingSeries();
    }
    return () => (mounted = false);
  }, [getTrendingSeries]);

  return (
    <div>
      <header className={classes["TrendMovie-header"]}>
        <div className={classes["trend-movie-text-wrapper"]}>
          <h1>Trending</h1>
          <span>Series</span>
        </div>
        <div className={classes["select-wrapper"]}>
          <select name="" id="">
            <option value="">Day</option>
            <option value="">Week</option>
          </select>
          <Link to={`trendingseries`}>See More</Link>
        </div>
      </header>

      {isLoading ? (
        <div className={classes["spinner-wrapper"]}>
          <ClipLoader size={"50"} color="#d63686" />
        </div>
      ) : (
        <TrendCard moviesOrSeries={TrendingSeries} movieortvstate="tv" />
      )}
    </div>
  );
}

export default TrendSeries;
