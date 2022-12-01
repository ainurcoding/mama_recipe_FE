const initialState = {
    data: [],
    recipes: [],
    isLoading: false,
    isError: false,
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_RECIPE_PENDING":
            return { ...state, isLoading: true }
        case "GET_LIST_RECIPE_FULFILLED":
            console.log(action.payload)
            return { ...state, isLoading: false, recipes: action.payload.data }
        case "GET_LIST_RECIPE_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "GET_RECIPE_BYID_PENDING":
            return { ...state, isLoading: true }
        case "GET_RECIPE_BYID_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "GET_RECIPE_BYID_REJECTED":
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}

export default recipeReducer;

