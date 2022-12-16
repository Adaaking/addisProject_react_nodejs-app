import * as type from '../types'

export const getMemories = () => {
    return {
        type: type.GET_MEMORIES,
    }
}
export const createMemories = (memory) => {
    return {
        type: type.CREATE_MEMORY,
        payload:memory
    }
}
export const updateId = (id) => {
    return {
        type: type.UPDATE_ID,
        payload:id
    }
}

export const updateMemory = (memory) => {
    return {
        type: type.UPDATE_MEMORY,
        payload:memory
    }
}
export const deleteMemory = (id) => {
    return {
        type: type.DELETE_MEMORY,
        payload:id
    }
}
