import React from "react";
import Select from "./FormFields/Select";
import cities from "../resources/city_list.js";

const SearchInput = props => {
  return (
    <div className="search container">
      <form
        name="search_weather"
        className="row mx-auto"
        onSubmit={props.doSearch}
      >
        <Select
          className="form-control col-10 mx-auto"
          name="city"
          aria-label="select a city for weather search"
          placeholder="Select a city"
          handleChange={props.handleSelect}
          values={cities}
        />
      </form>
    </div>
  );
};

export default SearchInput;
