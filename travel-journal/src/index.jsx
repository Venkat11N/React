// import {createRoot} from "react-dom/client"
// import App from "./App"


// const root = createRoot(document.getElementById("root"))
// root.render(<App />)

import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    } else if (hours < 21) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    return (
        <h1>Good {timeOfDay}</h1>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)