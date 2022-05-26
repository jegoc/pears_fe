import regReducer from '../../pages/user/redux/regReducer';
import loginReducer from '../../pages/login/redux/loginReducer';
import logoutReducer from '../../pages/logout/redux/logoutReducer';
import invmanReducer from '../../pages/shop/manage/invmanReducer';
import companyReducer from '../../pages/company/redux/compReducer';
import addbookprodReducer from '../../pages/booking/manage/redux/bookReducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    RegisterReducer: regReducer,
    LoginReducer: loginReducer,
    LogoutReducer: logoutReducer,
    InvManReducer: invmanReducer,
    CompanyReducer: companyReducer,
    AddBookProdReducer: addbookprodReducer,
});

export default rootReducers;