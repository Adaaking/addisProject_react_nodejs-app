import * as type from '../types';

const initialState = {
    memories:[],
}

export default function memoriesReducer(state = initialState, action){
    switch(action.type){
        case type.GET_MEMORIES_SUCCESS:
            return {
              ...state,
              memories: action.payload  
            }
        case type.CREATE_MEMORY_SUCCESS:
            return [...state.memories, action.payload]
        default:
            return state
    }
}