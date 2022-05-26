import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import logoutConst from './logoutConst';
import history from '../../../history';
import Cookies from 'universal-cookie';
import apiUrl from '../../../components/const/apiurl';
 
const cookies = new Cookies();
const cookie = cookies.get('id');

export function logoutUser(payload) {
    return axios
    .get(`${apiUrl.url}logout/${cookie}`)
    .then((res) => {
            return {
                user_id: "logout"
            };
    })
    .catch((error)=>{
        history.push('/login');
    });
  };

//saga
export function* logoutSaga(action){
    try{
        const userData = yield call(logoutUser, action.payload);
        if(userData){
            yield put({type: logoutConst.logoutSuccess, payload: userData})
            cookies.set('id','',{path:'/'});
            cookies.set('name','',{path:'/'});
            cookies.set('company','',{path:'/'});
            cookies.set('type','',{path:'/'});
            cookies.set('book','',{path:'/'});
            cookies.set('shop','',{path:'/'});
            cookies.set('bill','',{path:'/'});
            cookies.set('dtr','',{path:'/'});
            window.location.reload(false);
            history.push('/home');
        }else{
            yield put({type: logoutConst.logoutError, payload: "error"});
        }
    }catch(error){
        yield put({type: logoutConst.logoutError, payload: "error"})
    }
}

//watcher
export default function*(){
    yield takeLatest(logoutConst.logoutRequest,logoutSaga);
}