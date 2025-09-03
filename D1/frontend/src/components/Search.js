// 6-u21769584

import React from "react";

const Search = () =>{

return (
    <div>
        <link rel="stylesheet" type="text/css" href="/assets/css/Search.css"/>

        <form className="search-form" action="/search" method="get">

            <input type="search" id="search-input" name="query" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>
    </div>
)
}

export {Search}


