import { combineReducers } from 'redux';
import recipeReducer from './recipe'; 
import usersReducer from './user';

const rootReducer = combineReducers ({
    recipe: recipeReducer,
    user: usersReducer,
})

export default rootReducer;