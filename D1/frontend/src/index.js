import React from "react";
import ReactDOM from "react-dom/client";

import {App} from "./App";

function Greeting() {
    return (
        <div>
            <h2> Hello React! </h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);