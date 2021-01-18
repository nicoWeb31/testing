import tv4 from "tv4";
import statShema from "./stateShema";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch, getState }) => (next) => (action) => {
    next(action);

    // console.log(
    //     "🚀 ~ file: stateValidator.js ~ line 12 ~ valid",
    //     tv4.validate(getState(), statShema)
    // );

    if(!tv4.validate(getState(), statShema)){
        console.warning('Invalid state shema detected !!!')
    }
};
