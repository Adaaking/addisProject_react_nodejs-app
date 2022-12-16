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