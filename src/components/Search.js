import React from "react";

function Search({callbackFromHeader, search, callbackFromHeadeSubmit}) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("submitted");
  // }

  return (
    <form className="searchbar" onSubmit={callbackFromHeadeSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => callbackFromHeader(e.target.value)}
      />
      <button type="submit" >🔍</button>
    </form>
  );
}

export default Search;
