import React from "react";

import { NavLink } from "react-router-dom";
import IconBxsMovie from "../../icons/Movie";
import classes from "./MovieNav.module.css";

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
function MovieNav() {
  return (
    <nav className={classes["nav-wrapper"]}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? classes["active-navlink"] : classes["inactive-navlink"]
        }
      >
        <IconBxsMovie />
      </NavLink>
      <NavLink
        to={"moviesgenres"}
        className={({ isActive }) =>
          isActive ? classes["active-navlink"] : classes["inactive-navlink"]
        }
      >
        <LocalMoviesIcon fontSize="large" />
      </NavLink>
      <NavLink
        to={"tvgenres"}
        className={({ isActive }) =>
          isActive ? classes["active-navlink"] : classes["inactive-navlink"]
        }
      >
        <LiveTvIcon fontSize="large" />
      </NavLink>
      <NavLink
        to={"profile"}
        className={({ isActive }) =>
          isActive ? classes["active-navlink"] : classes["inactive-navlink"]
        }
      >
        <SentimentSatisfiedAltIcon fontSize="large" />
      </NavLink>
    </nav>
  );
}

export default MovieNav;
