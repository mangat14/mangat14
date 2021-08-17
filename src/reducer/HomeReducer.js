import { Strings } from "../utils/Strings";
import * as types from '../action/Types';

 const initialState = {
  response: null,
  error: null,
};

const HomeReducer = (state=initialState,action)=> {
  console.log('reducer---',action)
  switch (action.type) {
    case types.SUCCESS:
      if (action.statusCode) {
        if (action.statusCode === 200) {
          return {
            ...state, response: action.response, error: null,
          };

        } else if (action.statusCode === 400) {
          return {
            ...state, response: null, error: Strings.ERROR_400,
          };
        } else if (action.statusCode === 401) {
          return {
            ...state, response: null, error: Strings.ERROR_401,
          };
        } else if (action.statusCode === 429) {
          return {
            ...state, response: null, error: Strings.ERROR_429,
          };
        } else {
          return {
            ...state, response: null, error: Strings.ERROR,
          };
        }
      } else {
        return { ...state, response: null, error: Strings.ERROR };
      }


    case types.FAILURE:
      return { ...state, error: action.error };


    case types.SUCCESS_ADD:
      console.log('----' ,action.statusCode)
      if(action.statusCode){
        console.log('----' ,action.statusCode==201,action.response)
        if(action.statusCode==201){
          console.log(action.response)

          return {
            ...state, addDetailRes: action.response, error: null,
          };
        }
        else {
          return {
            ...state,response: null,error: Strings.ERROR
          }
        }
      }
      else{
        return {
          ...state,response: null,error: Strings.ERROR
        }
      }
    case types.FAILURE_ADD:
      return { ...state, error: action.error };


      default:
      return state;

  }
};

export default HomeReducer
