import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PeopleNames(props) {
  const [people, setPeople] = useState([]);

  //below is the same as .then(obj => this.setState({people: people}))
  let getPeople = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let people = await res.json();
    setPeople(people);
    
  };

  useEffect(() => {
    getPeople(people);
    return () => { }
  }, []);

  
    return (
      <div className="card text-white bg-warning mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
        
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  
}
