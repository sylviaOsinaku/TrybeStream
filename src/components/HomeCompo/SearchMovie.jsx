import React from "react";
import classes from "./InputStyles.module.css";
import IconSearchHeartFill from "../../icons/Search";
function SearchMovie() {
  return (
    <div className={classes["search-form-wrapper"]}>
      <form
        action="
      
      "
      >
        <div className={classes["input-wrapper"]}>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search For Movies For Tv Series"
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchMovie;
