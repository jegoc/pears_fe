import {useState} from 'react';
import {
    Button,
    Form,
    Container,
    Row,
    Col,    
    InputGroup,
    FormControl,
    Alert
} from 'react-bootstrap';
import '../../css/password.css';
import logo_head from '../../images/pear.png';
import FeatherIcon from 'feather-icons-react';
import {useDispatch, useSelector} from 'react-redux';
import { ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import loginConst from './redux/loginConst';
import {LoadingPage,LoginFailed} from '../common/loaderror';
import Cookies from 'universal-cookie';
import history from '../../history';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const cookies = new Cookies();

const Forgot = () =>{
const dispatch = useDispatch();
const [show, Disabled] = useState(true);
const [passwordShown, setPasswordShown] = useState(false);

const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
// get params in the url
// const search = window.location.search;
// const params = new URLSearchParams(search);
// const failed = params.get('failed');

const onChange = (value) => {
    console.log("Captcha value:", value)
    Disabled(false);
  }

const failed = useSelector(state => state.LoginReducer.error);
const loading = useSelector(state => state.LoginReducer.loading);

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues:{
            username:"",
            password:""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required for you to login."),
            password: Yup.string()
                .required("Password is required for you to login."),
        }),
        onSubmit: values =>{
            const payload = {
                username: values.username,
                password: Base64.stringify(sha256(values.password))
              };
            dispatch({
                type: loginConst.loginRequest,
                payload: payload
              });
        }
    });

    if((cookies.get('id') != '') && (cookies.get('id') != null)){
        history.push('/home');
    }

    return(
        <FormikProvider value={formik}>
        {console.log(formik)}
        
            <div className="bg-light mh-100 mw-100">
                <Container className="vh-100"> 
                {loading?<LoadingPage/>:""}
                    <Row className="justify-content-md-center">
                        <Col sm lg="4" className="my-3 p-3 bg-white rounded shadow-lg">
                            {failed?<LoginFailed/>:""}
                            <div className="text-info text-center mt-3"> <img src={logo_head} alt="" width="150" height="100"/></div>
                            <hr/>
                            
                            <Alert variant="warning">
                                <Alert.Heading>Forgot password?</Alert.Heading>
                                <hr />
                                <p className="mb-0">
                                    System will send your random password. Please check your email account.
                                </p>
                            </Alert>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Row>
                                    <Col sm>   
                                        <InputGroup size="md" className="mt-3 mb-1">
                                            <InputGroup.Prepend className="w-25">
                                            <InputGroup.Text className="w-100 pl-4">
                                                <FeatherIcon icon="mail" size="18" />
                                            </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                type="text" 
                                                placeholder="E-mail" 
                                                name="email"
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                        </InputGroup>
                                        <ErrorMessage name="email">
                                            {msg => <div style={{color:'red'}}>{msg}</div>}
                                        </ErrorMessage>
                                    </Col>
                                </Form.Row>
                                <br/>
                                <ReCAPTCHA sitekey="6Le73ZQaAAAAAMiABk5UPq2s-nPc1RCVS0opsrp8" onChange={onChange} />
                                <br/>
                                <Button variant="primary" type="submit" className="btn btn-primary btn-block" disabled={show}>
                                {/* <Button variant="primary" type="submit" className="btn btn-primary btn-block" > */}
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </FormikProvider>
    );
};

export default Forgot;