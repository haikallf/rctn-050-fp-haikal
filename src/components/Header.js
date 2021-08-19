import React, { useState } from "react";
import "./Header.css";
import Search from "./Search";

function Header(props) {
  const [localValue, setLocalValue] = useState("");

  const goToHome = () => {
    props.setInputSearch("man");
    setLocalValue("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left" onClick={goToHome}>
          RottenMangoes
        </div>
        <div className="header-right">
          <Search
            localValue={localValue}
            setLocalValue={setLocalValue}
            setInputSearch={props.setInputSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
