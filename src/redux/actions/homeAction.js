import * as types from '../constant-type';

export const addTodo=(params)=>{
    return{
        type: types.ADD_TO_DO,
        data:params
    }

}