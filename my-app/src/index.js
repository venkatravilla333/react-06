import App from "./App";

import ReactDOM from 'react-dom/client'
import Parent from "./functionalComponents/Routing/Parent";
import {BrowserRouter} from 'react-router-dom'

let root = ReactDOM.createRoot(document.getElementById('root'))


// let x = <h1>Hello sachin</h1>;
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);