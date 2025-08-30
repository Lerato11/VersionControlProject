import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
    return (
        <div>
            <h2> Hello React! </h2>
        </div>
    );
}

const root = ReactDOM.createRoot("root");
root.render(<Greeting />);