// eslint-disable-next-line import/no-anonymous-default-export
// export default ({ dispatch })=>{
//     return (next)=>{
//         return (action)=>{

//         }
//     }
// }


//middleware structure
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }) => (next) => (action) => {
    // check to see if action is a promise on its payload property
    //if it does  then wait for it to resolve 
    //if it doesn't , then send the action on the mext middleware

    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    //we want to wait for promùise to resolve
    //(get is data !!) and the create a new action with
    //with that data and dispatch it to the middleware

    action.payload.then((response)=>{
        const newAction = {...action, payload: response};
        dispatch(newAction);
    })





};
