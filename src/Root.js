import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";

const root =  ({children}) => {
    return <Provider store={store}>{children}</Provider>;
};

export default root;