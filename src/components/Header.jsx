import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeAuh } from "redux/actions";

const Header = () => {
    const dispatch = useDispatch();

    const stateAuth = useSelector((state) => state.auth);

    const btnRender = () => {
        if (stateAuth) {
            return (
                <button type="submit" onClick={handleSubmit}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button type="submit" onClick={handleSubmit}>
                    signIn
                </button>
            );
        }
    };

    const handleSubmit = () => {
        dispatch(changeAuh(!stateAuth));
    };

    return (
        <div>
            <ul className="list-nave">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>{btnRender()}</li>
            </ul>
        </div>
    );
};

export default Header;
