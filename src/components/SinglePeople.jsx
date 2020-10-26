import React, { Component, useState, useEffect, Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";

export default function SinglePeople(props) {
  const [personId, setPersonId] = useState({});
  const { id } = useParams();

  const getPeopleID = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let person = await res.json();
    setPersonId(person);
    console.log(person);
  };

  useEffect(() => {
    getPeopleID();
  }, [id]);

  return (
    <Fragment>
      <div class="card text-white bg-success mb-3">
        <div class="card-header">{personId.name}</div>
        <div class="card-body">
          <h5 class="card-title">{personId.email}</h5>
          <p class="card-text"></p>
          <Link to={`/people/${personId.id}`}></Link>
        </div>
      </div>
    </Fragment>
  );
}
