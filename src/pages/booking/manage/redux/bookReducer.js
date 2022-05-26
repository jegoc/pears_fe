import bookConst from './bookConst';

const initialState = {
    bookInfo: null,
    loading: false,
    error: "",
}

export default (state = initialState,{type, payload}) => {
    switch (type) {
        case bookConst.addbookprodRequest:
            return {...state, loading: true,  bookInfo: null, error: ""};
        case bookConst.addbookprodSuccess:
            return {...state, loading: false, bookInfo: payload, error: ""};
        case bookConst.addbookprodError:
            return {...state, loading: false, bookInfo: null, error: payload};
        default:
            return state;
    }
}