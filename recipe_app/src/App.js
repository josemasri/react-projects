import React, { useEffect, useState } from "react";
import "./App.css";
import Recipie from "./Recipie";

const App = () => {
  const APP_ID = "0f572440";
  const APP_KEY = "acd5b46c3be767aeb7b6496534d62ed3";

  const [recipes, setRecepies] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async (query = "chicken") => {
    setLoading(true);
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setLoading(false);
    setRecepies(data.hits);
  };

  const search = (e) => {
    e.preventDefault();
    if (query.length > 3) {
      getRecipies(query);
    } else {
      alert("Please add more characters");
    }
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={search}>
        <input
          className="search-form"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {!loading &&
          recipes.map((item, i) => (
            <Recipie
              key={i}
              title={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
            />
          ))}
      </div>
      {loading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default App;
