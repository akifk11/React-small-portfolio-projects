import React from "react";

const Search = ({ handleSearchNote }) => {
    return <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Ara... " onChange={(event) => handleSearchNote(event.target.value)} />
    </div>

};

export default Search;
