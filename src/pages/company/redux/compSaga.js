import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
import companyConst from './compConst';
import history from '../../../history';
import apiUrl from '../../../components/const/apiurl';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('id');

export function companyReg(payload) {
    return axios
    .post(`${apiUrl.url}compregister`,payload)
    .then((res) => {
        return {payload};
    })
    .catch((error)=>{
        history.push('/dashboard');
    });
  };

export function companyEdit(payload) {
    return axios
    .get(`${apiUrl.url}getuser/${cookie}`)
    .then((res) => {
        return {
            user_company: res.data[0].user_company, 
            user_fname: res.data[0].user_fname, 
            user_mi: res.data[0].user_mi, 
            user_lname: res.data[0].user_lname, 
            user_email:res.data[0].user_email,
            user_cellphone:res.data[0].user_cellphone,
            user_address:res.data[0].user_address,
            user_book:res.data[0].user_book,
            user_shop:res.data[0].user_shop,
            user_bill:res.data[0].user_bill,
            user_dtr:res.data[0].user_dtr
        };
    })
    .catch((error)=>{
        history.push('/dashboard');
        console.log("sangit")
    });
  };

//saga
export function* compEditSaga(action){
    try{
        const companyData = yield call(companyEdit, action.payload);
        console.log(companyData)
        if(companyData){
            yield put({type: companyConst.compEditSuccess, payload: companyData})
            history.push('/company');
            // window.location.reload(false);
        }else{
            yield put({type: companyConst.compEditError, payload: "error"})
        }
    }catch(error){
        yield put({type: companyConst.compEditError, payload: error.message})
    }
}

export function* companySaga(action){
    try{
        const companyData = yield call(companyReg, action.payload);
        
        if(companyData){
            yield put({type: companyConst.companySuccess, payload: companyData})
            history.push('/');
        }else{
            yield put({type: companyConst.companyError, payload: "error"})
        }
    }catch(error){
        yield put({type: companyConst.companyError, payload: error.message})
    }
}

//watcher
export default function*(){
    yield takeLatest(companyConst.companyRequest,companySaga);
    yield takeLatest(companyConst.compEditRequest,compEditSaga);
}