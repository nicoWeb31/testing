import React from "react";
import { useSelector } from "react-redux";

const ComponentList = () => {
    const comments = useSelector((state) => state.comments);
    console.log(
        "🚀 ~ file: ComponentList.jsx ~ line 9 ~ ComponentList ~ comment",
        comments
    );

    const renderComment = () => {
        return (
            comments.map((comment) => {
                return <li key={comment}>{comment}</li>;
            })

        )
    }

    return (
        <div>
            <h3>Comment List :</h3>
            <ul>
                {renderComment()}
            </ul>
        </div>
    );
};

export default ComponentList;
