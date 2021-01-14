import { SAVE_COMMENT, FETCH_COMMENTS } from "redux/type/type.js";
import axios from "axios";

export const saveComment = (comment) => {
    return { type: SAVE_COMMENT, payload: comment };
};

export const getComment = () => async (dispatch) => {
    const {data} = await axios.get(
        "http://jsonplaceholder.typicode.com/comments"
    );
    dispatch({ type: FETCH_COMMENTS, payload: data });
};
