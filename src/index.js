import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import store  from "redux/store";
import Root from "Root";
import { BrowserRouter, Route } from "react-router-dom";

import App from "components/App";

ReactDOM.render(
    <Root>
        <BrowserRouter>

            <Route path="/" component={App} />
                        
        </BrowserRouter>
    </Root>,

    document.getElementById("root")
);
