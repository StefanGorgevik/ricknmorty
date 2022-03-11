export const GET_CHARACTERS = "GET_CHARACTERS";
export const SET_INFO = "GET_INFO";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_PAGE = "SET_PAGE";
export const SET_SEARCH = "SET_SEARCH";

export const CharReducer = (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    case SET_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
