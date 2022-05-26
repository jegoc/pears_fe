import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Form,
    Container,
    Row,
    InputGroup,
    FormControl,
    Alert,
    Col
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
// import registerConst from './redux/regConst';
import { ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import '../../css/password.css';
import { LoadingPage, RegSuccess, RegFailed } from '../common/loaderror';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import ReCAPTCHA from "react-google-recaptcha";
import StarRatings from 'react-star-ratings';
import a1 from '../../images/1.jpg';
import a2 from '../../images/1.jpg';

const eye = <FontAwesomeIcon icon={faEye} />;

const BookNow = () =>{
var curr = new Date();
curr.setDate(curr.getDate());
var date = curr.toISOString().substr(0,10);

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
        username: "",
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
            .matches(/^([a-z\s A-Z])+$/, "Valid characters from a-z or A-Z only"),
        lname: Yup.string()
            .trim()
            .matches(/^([a-z\s A-Z])+$/, "Valid characters from a-z or A-Z only.")
            .required("Lastname is required."),
        address: Yup.string()
            .trim()
            .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only.")
            .required("Address is required."),
        email: Yup.string()
            .trim()
            .email("Enter a valid email.")
            .required("Email address is required."),
        cellphone: Yup.string()
            .trim()
            .matches(/^[0-9]{11}$/, "Please input valid cellphone # ex: 09XXXXXXXX.")
            .required("Cellphone number is required."),
        username: Yup.string()
            .trim()
            .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only.")
            .required("Username is required."),
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
            username: values.username,
            password: Base64.stringify(sha256(values.password)),
        };

        // dispatch({
        //     type: registerConst.registerRequest,
        //     payload: payload
        //   });
    }
});

return(
    <FormikProvider value={formik}>
        {console.log(formik)}
        <div className="bg-light">
        <Container>  
            {loading?<LoadingPage/>:""}
            
            
            <Row className="justify-content-md-center">
            <Col sm={8} className="my-3 p-2 bg-white rounded shadow-lg justify-content-md-center">
            <Row >
                <Col sm>
                    <img src={a2} className="w-100 h-100 mr-3" />
                </Col>
                <Col sm={5}>
                    <div className="media text-muted pt-2">
                        <div className="media-body pb-3 mb-0 small lh-125">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            
                            <h6 className="pb-2 mb-0 text-gray-dark">r.book_desc</h6>
                            </div>
                            <span className="d-block text-gray-dark">by : <a href="#" className="text-gray-dark">r.book_company</a></span>
                        </div>
                    </div>
                    <br/>
                    <StarRatings
                        rating={2.403}
                        starDimension="18px"
                        starSpacing="1px"
                        starRatedColor="#fcba03"
                    />
                    <span className="d-block text-gray-dark"><a href="#" className="text-gray-dark">Reviews</a></span>
                </Col>
                <Col sm className="border-left border-gray justify-content-between">
                    {/* <h5> {r.book_amount.toLocaleString('en-US',{style:'currency', currency: 'PHP',})}</h5> */}
                    <div className="media text-muted pt-3">
                        <div className="media-body pb-3 mb-0 small lh-125">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">r.book_booked Booking(s)</strong>
                            </div>
                            {/* <span className="d-block">Last Updated: {new Date(r.book_date).toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span> */}
                        </div>
                    </div>
                    
                </Col>
            </Row>
            </Col>
                <Col xs lg="8"  className="my-3 p-3 bg-white rounded shadow-sm">
                {ok?<RegSuccess/>:""}
                {failed?<RegFailed/>:""}
                <h4><FeatherIcon icon="book-open" size="30" /> Booking Details</h4>
                <hr/>
                <Form onSubmit={formik.handleSubmit}>
                <Alert variant="info">
                    <Row >
                        <Col sm={3}>
                        Name: 
                        </Col>
                        <Col sm>
                            <h6>Joseph Bryan Egoc</h6>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={3}>
                        Address: 
                        </Col>
                        <Col sm>
                            <h6>Block 21 Lot 6, Casa Mira, Linao, Minglanilla Cebu</h6>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={3}>
                        Email: 
                        </Col>
                        <Col sm>
                            <h6>j@gmail.com</h6>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={3}>
                        Cellphone:
                        </Col>
                        <Col sm>
                            <h6>09205305200</h6>
                        </Col>
                    </Row>
                    
                </Alert>
                    <Form.Group controlId="amount">
                    <Form.Label>Options available</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="unit"
                            placeholder="Unit"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.unit}
                        >
                            <option value="" disabled selected>Unit</option>
                            <option value="pcs">pcs</option>
                            <option value="pack">pack</option>
                            <option value="box">box</option>
                            <option value="bottle">bottle</option>
                            <option value="vials">vials</option>
                        </Form.Control>
                        <ErrorMessage name="unit">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                        </Form.Group>

                        <Form.Row>
                        <Col sm> 
                            <Form.Label>Total Adults</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Password"  
                                name="password"
                                maxLength="50"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                        </Col> 

                        <Col sm> 
                            <Form.Label>Total Children (Below 10 yrs old)</Form.Label>
                            <Form.Control 
                                type="text"
                                name="cpassword"
                                maxLength="50"
                                placeholder="Confirm Password"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.cpassword}
                            />
                        </Col>
                    </Form.Row>

                    
                    <Form.Row>
                        <Col sm> 
                            <Form.Label>From :</Form.Label>
                            <FormControl type="date" defaultValue={date} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            
                        </Col> 

                        <Col sm> 
                            <Form.Label>To :</Form.Label>
                            <FormControl type="date" defaultValue={date} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col sm> 
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        Start Time
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control>
                    </Col>
                    <Col sm>
                    <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                        End Time
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="inlineFormCustomSelectPref"
                        custom
                    >
                        <option value="0">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Control>
                    </Col>
                    </Form.Row>

                    <Form.Group controlId="waypay">
                    <Form.Label>Way of Payment</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="unit"
                            placeholder="Unit"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.unit}
                        >
                            <option value="" disabled selected>Unit</option>
                            <option value="pcs">pcs</option>
                            <option value="pack">pack</option>
                            <option value="box">box</option>
                            <option value="bottle">bottle</option>
                            <option value="vials">vials</option>
                        </Form.Control>
                        <ErrorMessage name="unit">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                        </Form.Group>

                        Total:
                            <div className="media text-muted pt-3">
                            <FeatherIcon icon="dollar-sign" size="24" />
                            <div className="media-body pb-3 mb-0 small lh-125">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                <strong className="text-gray-dark"> Total Amount</strong>
                                <h5>₱ 1,000</h5>
                                </div>
                            </div>
                            </div>
                            <div className="media text-muted pt-3">
                            <FeatherIcon icon="dollar-sign" size="24" />
                            <div className="media-body pb-3 mb-0 small lh-125">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                <strong className="text-gray-dark"> Total Amount</strong>
                                <h5>₱ 1,000</h5>
                                </div>
                            </div>
                            </div>
                    <br/>

                    <Button variant="primary" type="submit" className="btn btn-primary btn-block" >
                        {/* //disabled={show}> */}
                        Proceed to Pay
                    </Button>
                    </Form>
                </Col>
                <Col sm={4}>
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                        </small>
                    </div>
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">Full Name</strong>
                            <a href="#">Follow</a>
                            </div>
                            <span className="d-block">@username</span>
                        </div>
                        </div>
                        <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                        </small>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    </FormikProvider>
    )
};

export default BookNow;