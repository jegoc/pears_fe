import loginConst from './loginConst';

const initialState = {
    loginInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case loginConst.loginRequest:
            return {...state, loading: true, error: ""};
        case loginConst.loginSuccess:
            return {...state, loading: false, loginInfo: payload, error: ""};
        case loginConst.loginError:
            return {...state, loading: false, loginInfo: null, error: payload};
        default:
            return state;
    }
}