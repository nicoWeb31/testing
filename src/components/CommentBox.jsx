import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "redux/actions";

const CommentBox = () => {
    const [content, setContent] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(content);
        dispatch(actions.saveComment(content));
        setContent("");
    };

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleClickFetchCommment = () => {
        dispatch(actions.getComment());
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={content} onChange={handleChange} />
                <div className="submit">
                    <button type="submit">submit</button>
                </div>
            </form>
            <div>
                <h3>fetch comment from api</h3>
                <button type="submit" onClick={handleClickFetchCommment} className="btn-fetchComment">
                    {" "}
                    fetchComment{" "}
                </button>
            </div>
        </>
    );
};

export default CommentBox;
