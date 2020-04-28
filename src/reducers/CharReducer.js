export const GET_CHARACTERS = "GET_CHARACTERS"

export const CharReducer = (state,action) => {
    switch(action.type) {
        case GET_CHARACTERS: {
            console.log(action.payload)
            return { 
                ...state, characters: action.payload
            }
        }
        default : {
            return state
        }
    }
}