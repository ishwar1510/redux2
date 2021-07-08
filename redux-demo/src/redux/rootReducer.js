import { combineReducers } from "redux";

import CakeReducer from "./cake/CakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import UserReducer from './user/UserReducer'


const rootReducer = combineReducers({
    cake : CakeReducer,
    iceCream : iceCreamReducer,
    user : UserReducer
})

export default rootReducer