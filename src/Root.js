import React from "react";
import { Provider } from "react-redux";
import storeWithState from "redux/store";

const root =  ({children, initialState = {}}) => {
    return <Provider  store={storeWithState(initialState)}>{children}</Provider>;
};

export default root;