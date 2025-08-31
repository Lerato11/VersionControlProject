import React from "react";

const Search = () =>{

return (
    <form action="/search" method="get">
        <input type="search" id="search-input" name="query" placeholder="Search..."/>
        <button type="submit">Search</button>
    </form>
)
}

export {Search}


