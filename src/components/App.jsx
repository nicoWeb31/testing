import React from "react";
import CommentBox from "components/CommentBox";
import ComponentList from "components/ComponentList";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <div>

            <Route path="/post" component={CommentBox} />
            <Route path="/" component={ComponentList} />

        </div>
    );
};

export default App;
