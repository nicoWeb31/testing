import React from "react";
import CommentBox from "components/CommentBox";
import ComponentList from "components/ComponentList";
import { Route } from "react-router-dom";
import Header from "components/Header";
import './app.css'
import {useSelector} from 'react-redux' 

const App = () => {

    const isAuth = useSelector(state=>state.auth);
    console.log("🚀 ~ file: App.jsx ~ line 12 ~ App ~ isAuth", isAuth)


    return (
        <div className={`${isAuth ? "auth" : "noAuth"}`} >

            <Header/>

            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={ComponentList} />

        </div>
    );
};

export default App;
