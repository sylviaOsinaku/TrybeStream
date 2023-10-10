import React from "react";
import SearchMovie from "../components/HomeCompo/SearchMovie";
import TrendMovie from "../components/HomeCompo/TrendMovie";
import PopularMovie from "../components/HomeCompo/PopularMovie";
import NowPlaying from "../components/HomeCompo/NowPlaying";
import UpcomingMovie from "../components/HomeCompo/UpcomingMovies";
import TopRatedMovie from "../components/HomeCompo/TopRatedMovie";
import TrendSeries from "../components/HomeCompo/TrendingSeries";
import PopularTvSeries from "../components/HomeCompo/PopularSeries";
import AiringTvSeries from "../components/HomeCompo/AiringSeries";
import OnAirSeriesTv from "../components/HomeCompo/OnAirSeries";
import TopRatedTvSeries from "../components/HomeCompo/TopRatedSeries";

function TheHome() {
  return (
    <div>
      <TrendMovie />
      <PopularMovie />
      <NowPlaying />
      <UpcomingMovie />
      <TopRatedMovie />
      <TrendSeries />
      <PopularTvSeries />
      <AiringTvSeries />
      <OnAirSeriesTv />
      <TopRatedTvSeries />
    </div>
  );
}

export default TheHome;
