import React from "react";
import { Outlet } from "react-router-dom";
import MovieNav from "../components/Nav/MovieNav";
import "./globalstyle.css";
import TrendMovie from "../components/HomeCompo/TrendMovie";
import SearchMovie from "../components/HomeCompo/SearchMovie";
function Root() {
  return (
    <div className="root-container">
      <div>
        <MovieNav />
      </div>

      <main style={{ marginTop: "3em" }}>
        <SearchMovie />
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
