import companyConst from './compConst';

//   const initialState = companyEdit();
const initialState = {
    companyInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case companyConst.companyRequest:
            return {...state, loading: true, error: ""};
        case companyConst.companySuccess:
            return {...state, loading: false, companyInfo: payload, error: ""};
        case companyConst.companyError:
            return {...state, loading: false, companyInfo: null, error: payload};
        case companyConst.compEditRequest:
            return {...state, loading: true,  companyInfo: null, error: ""};
        case companyConst.compEditSuccess:
            return {...state, loading: false, companyInfo: payload, error: ""};
        case companyConst.compEditError:
            return {...state, loading: false, companyInfo: null, error: payload};
        default:
            return state;
    }
}