// 6-u21769584

import React from "react";
import ReactDOM from "react-dom/client";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";







const Search = () =>{
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState({ users: [], projects: [], feeds: [] });
    const [modalOpen, setModalOpen] = useState(false);

    const handleSearch = async () => {
        if (!query) return;

        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        
        // res.setHeader("Content-Type", "application/json");
        // res.json({ users, projects, feeds: filteredFeeds });

        const data = await res.json();

        if (res.ok) setResults(data);
    };

    return (
        <div>
            <link rel="stylesheet" type="text/css" href="/assets/css/Search.css"/>

            <form
                className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setModalOpen(true); 
                        handleSearch(); 
                    }}
                >

                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..."/>
                <button onClick={() => setModalOpen(true)}>Search</button>
            </form>

            {modalOpen && (
    <div className="modal-overlay">
        <div className="modal-content">
            
            <div className="modal-header">
                <h2>Search Results</h2>
                <button 
                    className="close-btn" 
                    onClick={() => setModalOpen(false)}
                >
                    &times;
                </button>
            </div>

           
            <div className="add-project-form"> 

    
                <div className="search-input-area">
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search users, projects, feeds..."
                    />
                    <button type="button" onClick={() => { handleSearch(); }}>Search</button>
                </div>


                <div className="search-results">
                    <h3>Users</h3>
                    <ul>
                        {results.users.map(u => (
                            <li key={u.id} onClick={() => navigate(`/profile/${u.id}`)}>{u.username}  -  ({u.firstName})</li>
                        ))}
                    </ul>

                    <h3>Projects</h3>
                    <ul>
                        {results.projects.map(p => (
                            <li key={p.id} onClick={() => navigate(`/projects/${p.id}`)}>{p.name}  -  ({p.version})</li>
                        ))}
                    </ul>

                    <h3>Feeds</h3>
                    <ul>
                        {results.feeds.map(f => (
                            <li key={f.id} onClick={() => navigate(`/projects/${f.project_id}`)}>
                                message: {f.message}  -  username: ({f.userName})
                            </li>
                        ))}
                    </ul>
                </div>

            
                </div>
            </div>
        </div>
    )}
        </div>

        
    )
}

export {Search}


