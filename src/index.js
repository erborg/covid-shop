import React from "react";
import {render} from "react-dom";
import Login from "./Login";
import Shop from "./Shop";

function App() {
    return <Login><Shop/></Login>
}

render(<App/>, document.querySelector("#root"));
