import React, { useState, useEffect, Fragment } from "react";
import Home from "./Home";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";
import PeopleNames from "./PeopleNames";
import SinglePeople from "./SinglePeople";


const App = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUsers(users);
    return () => {};
  }, []);

  return (
    <Fragment>
      
      <Router>
        <Link className="Home" id="Home-link" to="/">
          Go Home!
        </Link>

        <Link className="Names" to="/peoplenames">
          Go to People!
        </Link>
        <div className="container">
          <div className="col-md-12">
            <ul className="list-group">
              {users.map((user) => (
                <li key={user.id} class="list-group" className="list-group-item">
                  {user.name}
                  <Link className="peopleId" to={`/people/${user.id}`}>
                   <button type="button" class="btn btn-success">Go to People!</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/people" component={PeopleNames}></Route> */}
          <Route exact path="/people/:id">
            <SinglePeople />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
