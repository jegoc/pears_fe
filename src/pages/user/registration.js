import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Form,
    Container,
    InputGroup,
    FormControl,
    Row,
    Col
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import registerConst from './redux/regConst';
import { ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import '../../css/password.css';
import { LoadingPage, RegSuccess, RegFailed } from '../common/loaderror';
import Advertise from '../common/advertise';
import Online from '../common/online';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import apiUrl from '../../components/const/apiurl';

const eye = <FontAwesomeIcon icon={faEye} />;

const Registration = () =>{
const dispatch = useDispatch();
const [show, Disabled] = useState(true);
const [passwordShown, setPasswordShown] = useState(false);
const [cpasswordShown, setCPasswordShown] = useState(false);

const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
};

const toggleCPasswordVisiblity = () => {
    setCPasswordShown(cpasswordShown ? false : true);
};

const onChange = (value) => {
    console.log("Captcha value:", value)
    Disabled(false);
}

const ok = useSelector(state => state.RegisterReducer.registerInfo);
const failed = useSelector(state => state.RegisterReducer.error);
const loading = useSelector(state => state.RegisterReducer.loading);

const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues:{
        fname: "",
        mi: "",
        lname: "",
        address: "",
        email: "",
        cellphone: "",
        password: "",
        cpassword: ""
    },
    
    validationSchema: Yup.object({
        fname: Yup.string()
            .trim()
            .matches(/^([a-z\s A-Z])+$/, "Valid characters from a-z or A-Z only")
            .max(50, 'Must be 50 characters or less')
            .required("Firstname is required"),
        mi: Yup.string()
            .trim()
            .max(1, 'Must be 1 character only')
            .matches(/^([a-z\s A-Z])+$/, "Valid characters from A-Z only"),
        lname: Yup.string()
            .trim()
            .matches(/^([a-z\s A-Z])+$/, "Valid characters from a-z or A-Z only.")
            .required("Lastname is required."),
        address: Yup.string()
            .trim()
            .required("Address is required."),
        email: Yup.string()
            .trim()
            .email("Enter a valid email.")
            .required("Email address is required.")
            .test('Unique Email','Email already in use', 
                function(value){return new Promise((resolve, reject) => {
                    axios.post(`${apiUrl.url}regchkemail/`, {'email': value})
                    .then(res => {if(res.data.msg === 'Username already been taken'){resolve(false)} resolve(true)})
                })}
            ),
        cellphone: Yup.string()
            .trim()
            .matches(/^[0-9]{11}$/, "Please input valid cellphone # ex: 09XXXXXXXX.")
            .required("Cellphone number is required."),
        password: Yup.string()
            .required("Password is required."),
        cpassword: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Password not match!"
                )
            })
            .required("Please confirm your password."),
    }),
    onSubmit: values =>{
        const payload = {
            fname: values.fname,
            mi: values.mi,
            lname: values.lname,
            address: values.address,
            email: values.email,
            cellphone: values.cellphone,
            password: Base64.stringify(sha256(values.password)),
        };

        dispatch({
            type: registerConst.registerRequest,
            payload: payload
          });
    }
});

return(
    <FormikProvider value={formik}>
        {console.log(formik)}
        <div className="bg-light">
        <Container>  
            {loading?<LoadingPage/>:""}
            
            <Row className="justify-content-md-center">
                <Col xs lg="8"  className="my-3 p-3 bg-white rounded shadow-lg">
                {ok?<RegSuccess/>:""}
                {failed?<RegFailed/>:""}
                <h4 className="text-info" ><FeatherIcon icon="users" size="30" /> User account registration</h4>
                <hr/>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Row>
                        <Col sm>   
                            <InputGroup size="md" className="mt-3 mb-1">
                                <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">First</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    name="fname" 
                                    maxLength="50"
                                    placeholder="First Name"  
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fname}
                                />
                            </InputGroup>
                            <ErrorMessage name="fname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                        <Col sm> 
                            <InputGroup size="md" className="mt-3 mb-1">
                                <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">MI</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    name="mi" 
                                    placeholder="MI"
                                    maxLength="1"
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mi}
                                />
                            </InputGroup>
                            <ErrorMessage name="mi">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                        <Col sm>
                            <InputGroup size="md" className="mt-3 mb-1">
                                <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">Last</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                   name="lname" 
                                   maxLength="50"
                                   placeholder="Last Name" 
                                   onChange={formik.handleChange} 
                                   onBlur={formik.handleBlur}
                                   value={formik.values.lname}
                                />
                            </InputGroup>
                            <ErrorMessage name="lname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                    </Form.Row>

                    <Form.Group>
                        <InputGroup size="md" className="mt-3 mb-1">
                            <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">
                                {/* <FeatherIcon icon="map" size="18" /> */}
                                    Address
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                name="address"
                                maxLength="50"
                                placeholder="Address"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                        </InputGroup>
                        <ErrorMessage name="address">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group>
                        <InputGroup size="md" className="mt-3 mb-1">
                            <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">
                                    {/* <FeatherIcon icon="smartphone" size="18" /> */}
                                    Cellphone
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                name="cellphone" 
                                placeholder="09XXXXXXXX" 
                                maxLength="11"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.cellphone}
                            />
                        </InputGroup>
                        <ErrorMessage name="cellphone">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group>
                        <InputGroup size="md" className="mt-3 mb-1">
                            <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">
                                    {/* <FeatherIcon icon="mail" size="18" /> */}
                                    E-mail
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                name="email"
                                maxLength="50"
                                placeholder="Email Address" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </InputGroup>
                        <ErrorMessage name="email">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    {/* <hr/>
                    <Form.Group>
                        <InputGroup size="md" className="mt-3 mb-1">
                            <InputGroup.Prepend className="w-25">
                                <InputGroup.Text className="w-100">
                                    Username
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                                placeholder="Username"
                                name="username"
                                maxLength="50"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />
                        </InputGroup>
                        <ErrorMessage name="username">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group> */}

                    <Form.Row>
                        <Col sm> 
                            <InputGroup size="md" className="mt-3 mb-1">
                                <InputGroup.Prepend className="w-25">
                                    <InputGroup.Text className="w-100">
                                        Password
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="Password"  
                                    name="password"
                                    maxLength="50"
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                            </InputGroup>
                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                        </Col> 

                        <Col sm>
                            <InputGroup size="md" className="mt-3 mb-1">
                                <InputGroup.Prepend className="w-25">
                                    <InputGroup.Text className="w-100">
                                        Confirm
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl 
                                    type={cpasswordShown ? "text" : "password"}
                                    name="cpassword"
                                    maxLength="50"
                                    placeholder="Confirm Password"
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cpassword}
                                />
                            </InputGroup>
                            <i onClick={toggleCPasswordVisiblity}>{eye}</i>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col sm>
                            <ErrorMessage name="password">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col> 

                        <Col sm> 
                            <ErrorMessage name="cpassword">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                    </Form.Row>
                    <br/>

                    <ReCAPTCHA sitekey="6Le73ZQaAAAAAMiABk5UPq2s-nPc1RCVS0opsrp8" onChange={onChange} />
                    <br/>
                    <Button variant="primary" type="submit" className="btn btn-primary btn-block" disabled={show}>
                        {/* disabled={show}> */}
                        <FeatherIcon icon="corner-down-left" size="18" /> Submit
                    </Button>
                    </Form>
                </Col>
                {/* <Col sm={4}>
                    <Advertise/>
                    <Online/>

                </Col> */}
            </Row>
        </Container>
        </div>
    </FormikProvider>
    )
};

export default Registration;