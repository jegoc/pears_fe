import { all, fork } from "redux-saga/effects";
import registerSaga from "../pages/user/redux/regSaga";
import loginSaga from "../pages/login/redux/loginSaga";
import logoutSaga from "../pages/logout/redux/logoutSaga";
import companySaga from "../pages/company/redux/compSaga";
import invmanSaga from "../pages/shop/manage/invmanSaga";
import addbookprodSaga from "../pages/booking/manage/redux/bookSaga";

export default function* () {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(logoutSaga),
    fork(companySaga),
    fork(invmanSaga),
    fork(addbookprodSaga)
  ]);
}