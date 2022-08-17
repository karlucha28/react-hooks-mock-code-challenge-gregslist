import React from "react";
import Search from "./Search";

function Header({callbackFromHeader, search, callbackFromHeadeSubmit}) {

  






  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search  callbackFromHeader={callbackFromHeader} search={search} callbackFromHeadeSubmit={callbackFromHeadeSubmit}/>
    </header>
  );
}

export default Header;
