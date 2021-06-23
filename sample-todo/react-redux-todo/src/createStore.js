import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger"
import { todoReducer  } from "./reducers/Todo";

export default function createStore(){
    const todoReducers = combineReducers({
        todo_redu: todoReducer
    });
    
    const store = reduxCreateStore(
        todoReducers,
        applyMiddleware(
            logger
        )
    );
    
    return store
}