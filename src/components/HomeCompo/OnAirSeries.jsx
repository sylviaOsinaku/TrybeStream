import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TrendCard from "./TrendCard";
import classes from "./TrendHeader.module.css";
import { ClipLoader } from "react-spinners";
function OnAirSeriesTv() {
  const [OnAirSeries, setOnAirSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getOnAirSeries = useCallback(async function () {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
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

      const theMovies = await response.json();

      setOnAirSeries(theMovies?.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getOnAirSeries();
    }
    return () => (mounted = false);
  }, [getOnAirSeries]);

  return (
    <div>
      <header className={classes["TrendMovie-header"]}>
        <div className={classes["trend-movie-text-wrapper"]}>
          <h1>On Air</h1>
          <span>Series</span>
        </div>
        <div className={classes["select-wrapper"]}>
          <Link to={`onairseries`}>See More</Link>
        </div>
      </header>

      {isLoading ? (
        <div className={classes["spinner-wrapper"]}>
          <ClipLoader size={"50"} color="#d63686" />
        </div>
      ) : (
        <TrendCard moviesOrSeries={OnAirSeries} movieortvstate="tv" />
      )}
    </div>
  );
}

export default OnAirSeriesTv;
