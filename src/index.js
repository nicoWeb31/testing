import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store  from "redux/store";
import Root from "Root";

import App from "components/App";

ReactDOM.render(
    <Root>
        <App />
    </Root>,

    document.getElementById("root")
);
