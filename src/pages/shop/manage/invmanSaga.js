import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import invmanConst from './invmanConst';
import history from '../../../history';
import Cookies from 'universal-cookie';
import apiUrl from '../../../components/const/apiurl';

const cookies = new Cookies();

export function addProduct(payload) {
    return axios
    .post(`${apiUrl.url}addprod`,payload)
    .then((res) => {
        return {payload};
    })
    .catch((error)=>{
        history.push('/addprod?failed=error');
    });
  };

//saga
export function* addprodSaga(action){
    try{
        const registerData = yield call(addProduct, action.payload);
        if(registerData){
            yield put({type: invmanConst.addprodSuccess, payload: registerData})
        }else{
            console.log("wala");
        }
    }catch(error){
        yield put({type: invmanConst.addprodError, payload: error.message})
    }
}

//watcher
export default function*(){
    yield takeLatest(invmanConst.addprodRequest,addprodSaga);
}