import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import registerConst from './regConst';
import history from '../../../history';
import Cookies from 'universal-cookie';
import apiUrl from '../../../components/const/apiurl';

const cookies = new Cookies();

export function registerUser(payload) {
    return axios
    .post(`${apiUrl.url}register`,payload)
    .then((res) => {
        return {payload};
    })
    .catch((error)=>{
        history.push('/registration');
    });
  };

//saga
export function* registerSaga(action){
    try{
        const registerData = yield call(registerUser, action.payload);
        if(registerData){
            yield put({type: registerConst.registerSuccess, payload: registerData})
            // window.location.reload(false);
        }else{
            yield put({type: registerConst.registerError, payload: "error"})
        }
    }catch(error){
        yield put({type: registerConst.registerError, payload: error.message})
    }
}

//watcher
export default function*(){
    yield takeLatest(registerConst.registerRequest,registerSaga);
}