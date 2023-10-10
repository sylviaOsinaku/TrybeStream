import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import DetailedMovie from "../components/Details/DetailedMovie";
function TvDetail() {
  const { tvId } = useParams();
  const [TvDetails, setTvDetails] = useState(null);
  const [tvCasts, setTVCasts] = useState(null);

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
          `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`,
          options
        );
        const castResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${tvId}/credits?language=en-US`,
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
        setTvDetails(theMovies);
        setTVCasts(theCasts);
      } catch (err) {
        console.log(err);
      }
    },
    [tvId]
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
      {TvDetails ? (
        <DetailedMovie movieDetails={TvDetails} movieCasts={tvCasts} />
      ) : (
        <p>Loading...s</p>
      )}
    </>
  );
}

export default TvDetail;
