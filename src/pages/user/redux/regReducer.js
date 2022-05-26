import registerConst from './regConst';

const initialState = {
    registerInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case registerConst.registerRequest:
            return {...state, loading: true,  registerInfo: null, error: ""};
        case registerConst.registerSuccess:
            return {...state, loading: false, registerInfo: payload, error: ""};
        case registerConst.registerError:
            return {...state, loading: false, registerInfo: null, error: payload};
        default:
            return state;
    }
}