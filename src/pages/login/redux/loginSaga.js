import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import loginConst from './loginConst';
import history from '../../../history';
import Cookies from 'universal-cookie';
import apiUrl from '../../../components/const/apiurl';
 
const cookies = new Cookies();

export function fetchUser(payload) {
    return axios
    .post(`${apiUrl.url}login`,payload)
    .then((res) => {
            return {
                user_id: res.data[0].user_id, 
                user_fname: res.data[0].user_fname, 
                user_company: res.data[0].user_company, 
                user_type:res.data[0].user_type,
                user_book:res.data[0].user_book,
                user_shop:res.data[0].user_shop,
                user_bill:res.data[0].user_bill,
                user_dtr:res.data[0].user_dtr
            };
    })
    .catch((error)=>{
        history.push('/login');
    });
  };

//saga
export function* loginSaga(action){
    try{
        const userData = yield call(fetchUser, action.payload);
        if(userData){
            yield put({type: loginConst.loginSuccess, payload: userData})
            console.log(userData.user_id);
            cookies.set('id',userData.user_id,{path:'/'});
            cookies.set('name',userData.user_fname,{path:'/'});
            cookies.set('company',userData.user_company,{path:'/'});
            cookies.set('type',userData.user_type,{path:'/'});
            cookies.set('book',userData.user_book,{path:'/'});
            cookies.set('shop',userData.user_shop,{path:'/'});
            cookies.set('bill',userData.user_bill,{path:'/'});
            cookies.set('dtr',userData.user_dtr,{path:'/'});
            window.location.reload(false);
            history.push('/home');
        }else{
            yield put({type: loginConst.loginError, payload: "error"});
        }
    }catch(error){
        yield put({type: loginConst.loginError, payload: "error"})
    }
}

//watcher
export default function*(){
    yield takeLatest(loginConst.loginRequest,loginSaga);
}