import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const intialState = {profilePhoto:""};
const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const LOGOUT = "LOGOUT";

export function createAccount(user) {
    return{
        type: CREATE_ACCOUNT,
        payload: user
    }
}

export function logout(){
    return{
        type: LOGOUT
    }
}

function UserRedcucer(state = intialState, action) {
    switch(action.type){
        case CREATE_ACCOUNT:
            return {
                ...state,
                ...(action.payload)
            }
        case LOGOUT:
            return {}
        default: return state
        }
    }
    
const persistConfig = {
    key: "root",
    version: 1,
    storage,
}
const reducer = combineReducers({
    user: UserRedcucer,
})
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer);