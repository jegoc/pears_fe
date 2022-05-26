import invmanConst from './invmanConst';

const initialState = {
    addInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case invmanConst.addprodRequest:
            return {...state, loading: true};
        case invmanConst.addprodSuccess:
            return {...state, loading: false, addInfo: payload, error: ""};
        case invmanConst.addprodError:
            return {...state, loading: false, addInfo: null, error: payload};
        default:
            return state;
    }
}