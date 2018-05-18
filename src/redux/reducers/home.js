import * as types from '../constant-type';

const initState={
    name:'shangyy'
};
function home(state = initState, action){

    const {type,data}=action;
    switch(type) {
        case types.ADD_TO_DO :
        	return {...state,...data}
        default: return state;
    }
}

export default home;
