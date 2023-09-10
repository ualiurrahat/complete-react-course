import React from "react";
import ReactDOM from 'react-dom/client'; // react before 18: import ReactDOM from 'react-dom'


function App() {
    return <h1>Hello React!</h1>;
}

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

// react before 18
// React.render(<App/>)
// about StrictMode: renders our components twice
// to check if there is any bug or any outdated components.
// good practice to use StrictMode