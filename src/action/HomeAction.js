import { API_KEY, BASE_URL, CREATE_URL } from "../constants/index";
import * as type from  "../action/Types"

export const getHomeData=(page)=>{
  return function (dispatch) {

    fetch(BASE_URL +'api/users?page='+page, {
      method: 'GET',
    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);

      })
      .then(([statusCode,data])=> {
        console.log('statusCode--',statusCode)

        dispatch(getHomeDataSuccess(statusCode,data));
      })
      .catch((error) => {
        console.log('failure--',error)
        dispatch(getHomeDataFail(error));
      }).done();
  };
};
export const getHomeDataSuccess = (statusCode,responseData) => {

  return {
    type: type.SUCCESS,
    response: responseData,
    statusCode:statusCode

  };
};
export const getHomeDataFail = (error) => {
  return {
    type: type.FAILURE,
    error: error.message,
  };
};

export const createHomeData=(name,job)=>{
  return function (dispatch) {
    fetch(BASE_URL+'api/users' , {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "name": name,
        "job": job
      })
    })
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);

      })
      .then(([statusCode,data])=> {
        console.log('statusCode--',statusCode)

        dispatch(createHomeDataSuccess(statusCode,data));
      })
      .catch((error) => {
        console.log('failure--',error)
        dispatch(createHomeDataFail(error));
      }).done();
  };
}


export const createHomeDataSuccess = (statusCode,responseData) => {

  return {
    type: type.SUCCESS_ADD,
    response: responseData,
    statusCode:statusCode

  };
};
export const createHomeDataFail = (error) => {
  return {
    type: type.FAILURE_ADD,
    error: error.message,
  };
};
