import {createStore,applyMiddleware} from "redux";
import app from './reducer/index'
import thunk from "redux-thunk";


export default function configureStore(){
  let store=createStore(app,applyMiddleware(thunk))
  return store
}
