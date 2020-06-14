import React, { useEffect } from "react";
import { SAVE_QUERY_URL } from "../constants";
import { saveQuery } from "../networking";

const Search = (props) => {
  useEffect(() => {
    saveQuery("eminem");
  }, []);
  return null;
};

export default Search;
