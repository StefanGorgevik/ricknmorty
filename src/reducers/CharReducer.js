export const GET_CHARACTERS = "GET_CHARACTERS"
export const SET_INFO = "GET_INFO"
export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_CHOSEN_CHARACTER = "SET_CHOSEN_CHARACTER"
export const SET_PAGE = "SET_PAGE"
export const SET_SEARCH = "SET_SEARCH"

export const CharReducer = (state, action) => {
    switch (action.type) {
        case GET_CHARACTERS: {
            return {
                ...state, characters: action.payload
            }
        }
        case SET_INFO: {
            return {
                ...state, info: action.payload
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state, isLoading: action.payload
            }
        }
        case SET_CHOSEN_CHARACTER: {
            let chars = []
            if (action.payload !== '') {
                chars = state.characters.filter(ch => ch.id !== action.payload.id)
                chars.unshift(action.payload)
            } else {
                chars = state.characters
            }
            return {
                ...state, chosenCharacter: action.payload, characters: chars
            }
        }
        case SET_PAGE: {
            return {
                ...state, page: action.payload
            }
        }
        case SET_SEARCH: {
            return {
                ...state, search: action.payload
            }
        }
        default: {
            return state
        }
    }
}