import "bootstrap/dist/css/bootstrap.min.css";

import Loading from "./Loading";
import Error from "./Error";
import React from "react";
import { useFetch } from "./useFetch";

function Main() {
  const { data, loading, error } = useFetch("https://randomuser.me/api");
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <p>{data && data.results[0].cell}</p>
      <img src={data && data.results[0].picture.large} alt="" />
    </div>
  );
}

export default Main;
