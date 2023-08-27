import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1 > Actors Page </h1>
    {actors.map((act,index)=>{
      return <div key={index}>
        <p>{act.name} </p>
        <ul>{act.movies.map((movie,index)=>{
          return <li key={index}>{movie}</li>
        })}</ul>
      </div>
    })}
  </div>;
}

export default Actors;