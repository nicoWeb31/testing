import { commentReducer } from "redux/reducer/commentReducer";
import { SAVE_COMMENT } from "redux/type/type.js";

test("handle actions of type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "new comment toto",
    };

    const newState = commentReducer([], action);

    expect(newState).toEqual(["new comment toto"]);
});


test('handle actions with unknow type', () => {
    const newState = commentReducer([],{type : 'unkwon type'});
    expect(newState).toEqual([])

})