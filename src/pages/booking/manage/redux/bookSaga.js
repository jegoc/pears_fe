import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import bookConst from './bookConst';
import history from '../../../../history';
import Cookies from 'universal-cookie';
import apiUrl from '../../../../components/const/apiurl';

const cookies = new Cookies();

export function addbookProd(payload) {
    return axios
    .post(`${apiUrl.url}addbookprod`,payload)
    .then((res) => {
        return {payload};
    })
    .catch((error)=>{
        history.push('/');
    });
  };

//saga
export function* bookSaga(action){
    try{
        const addbookprodData = yield call(addbookProd, action.payload);
        if(addbookprodData){
            yield put({type: bookConst.addbookprodSuccess, payload: addbookprodData})
            // window.location.reload(false);
        }else{
            yield put({type: bookConst.addbookprodError, payload: "error"})
        }
    }catch(error){
        yield put({type: bookConst.addbookprodError, payload: error.message})
    }
}

//watcher
export default function*(){
    yield takeLatest(bookConst.addbookprodRequest,bookSaga);
}