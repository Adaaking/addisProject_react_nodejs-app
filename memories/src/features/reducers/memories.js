import * as type from '../types';

const initialState = {
    memories:[],
    loading:false,
    success:false,
    updateId:null,
}

export default function memoriesReducer(state = initialState, action){
    switch(action.type){
        case type.GET_MEMORIES:
            return {
                ...state,
                loading: true
            }
        case type.GET_MEMORIES_SUCCESS:
            return {
              ...state,
              memories: action.memories,
              loading:false,
              success:true
            }
            case type.GET_MEMORIES_FAILED:
                return {
                  ...state,
                  loading:false,
                  success:false
                }
        case type.CREATE_MEMORY_SUCCESS:
            return [...state.memories, action.payload]

        case type.UPDATE_ID:
            return {
                ...state,
                updateId:action.payload
            }
        case type.UPDATE_MEMORIES_SUCCESS:
            return {
                ...state,
                success:true
            }
        case type.DELETE_MEMORY_SUCCESS:
            return {
                ...state,
                memories: state.memories.filter(memory => memory._id !== action.payload)
            }
        default:
            return state
    }
}