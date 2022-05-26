import logoutConst from './logoutConst';

const initialState = {
    logoutInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case logoutConst.logoutRequest:
            return {...state, loading: true, error: ""};
        case logoutConst.logoutSuccess:
            return {...state, loading: false, logoutInfo: payload, error: ""};
        case logoutConst.logoutError:
            return {...state, loading: false, logoutInfo: null, error: payload};
        default:
            return state;
    }
}