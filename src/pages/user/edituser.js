import {
    ListGroup,
    Container,
    Row,
    Col,
    Button,
    Form,
    Image
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import FeatherIcon from 'feather-icons-react';

import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import imagesUrl from '../../components/const/imagesUrl';
const eye = <FontAwesomeIcon icon={faEye} />;
const EditUser = () =>{
    const { register, handleSubmit } = useForm();
    const passwordShown = useSelector(state=>state.passwordShown);
const dispatch = useDispatch();
    

const handleChange = () =>{
    return dispatch({
        type: "SHOW"
    });
 }
 
 // const [passwordShown, setPasswordShown] = false;
 const togglePasswordVisiblity = () => {
     return dispatch({
         type: "SHOW"
     });
     // setPasswordShown(passwordShown ? false : true);
   };

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues:{
            cellphone:""
        },
        validationSchema: Yup.object({
            cellphone: Yup.string()
                .matches(/^([0-9]{11})+$/, "Please input cellphone # ex: 09.....")
                .required("Please input your cellphone number.")
        }),
        onSubmit: values =>{
    
        }
    });

    return(
        <FormikProvider value={formik}>
        {console.log(formik)}
      <div className="bg-light">
        <Container>   
            <Row className="justify-content-md-center ">
                <Col sm={4} className="my-3 p-3 bg-white rounded shadow-sm ">
                    <div className="text-center">
                    <Image 
                        src={`${imagesUrl.url}avatar.png`} 
                        className="shadow lg"
                        style={{ width: '180px', height: '180px' }}
                        fluid ="true"
                        roundedCircle />
                        <br/><br/>
                    <Form>
                        <Form.File 
                            id="custom-file-translate-scss"
                            label="Edit Profile Picture"
                            lang="en"
                            custom
                        />
                    </Form>
                    </div>
                
            <ListGroup  variant="flush" className=" rounded">
                    <ListGroup.Item action href="/edituser" variant="light">
                        <FeatherIcon icon="user" size="18" /> Edit Profile
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="bell" size="18" /> Notifications
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="message-circle" size="18" /> Messages
                    </ListGroup.Item>
                    <ListGroup.Item action href="/translist" variant="light">
                        <FeatherIcon icon="list" size="18" /> Transaction List
                    </ListGroup.Item>
                    <ListGroup.Item action href="/invreport" variant="light">
                        <FeatherIcon icon="credit-card" size="18" /> Payment List
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col sm={8} className="my-3 p-3 bg-white rounded shadow-sm">
                <h5 className="border-bottom border-gray pb-2 mb-2">Personal Information</h5>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Row>
                        <Col sm>    
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                name="fname" 
                                maxLength="50"
                                placeholder="First Name" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.fname}
                            />
                            <ErrorMessage name="fname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                        <Col sm> 
                            <Form.Label>MI</Form.Label>
                            <Form.Control 
                                name="mi" 
                                placeholder="MI"
                                maxLength="1"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.mi}
                            />
                            <ErrorMessage name="mi">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                        <Col sm> 
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                name="lname" 
                                maxLength="50"
                                placeholder="Last Name" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.lname}
                            />
                            <ErrorMessage name="lname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            name="address"
                            maxLength="50"
                            placeholder="Address"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                        <ErrorMessage name="address">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            name="email"
                            maxLength="50"
                            placeholder="Email Address" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <ErrorMessage name="email">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="formCellphone">
                        <Form.Label>Cellphone #</Form.Label>
                        <Form.Control 
                            name="cellphone" 
                            placeholder="09XXXXXXXX" 
                            maxLength="11"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.cellphone}
                        />
                        <ErrorMessage name="cellphone">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>
                    <hr/>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            placeholder="Username"
                            name="username"
                            maxLength="50"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        <ErrorMessage name="username">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Row>
                        <Col sm> 
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="Password"  
                                name="password"
                                maxLength="50"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                // ref={register({ required: "This is required." })}
                            />
                            <i>{eye}</i>
                            <ErrorMessage name="password">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col> 

                        <Col sm> 
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="cpassword"
                                maxLength="50"
                                placeholder="Confirm Password"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.cpassword}
                            />
                            <i>{eye}</i>
                            <ErrorMessage name="cpassword">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I Accept the terms and conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="btn btn-primary btn-block">
                        Submit
                    </Button>
                    </Form>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col sm className="my-3 p-3 bg-white rounded shadow-sm">
                <div>
                    <h6 class="border-bottom border-gray pb-2 mb-0">Transactions</h6>
                    <div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                        </div>
                        <span class="d-block">@username</span>
                    </div>
                    </div>
                    <div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                        </div>
                        <span class="d-block">@username</span>
                    </div>
                    </div>
                    <div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div class="d-flex justify-content-between align-items-center w-100">
                        <strong class="text-gray-dark">Full Name</strong>
                        <a href="#">Follow</a>
                        </div>
                        <span class="d-block">@username</span>
                    </div>
                    </div>
                    <small class="d-block text-right mt-3">
                    <a href="#">All suggestions</a>
                    </small>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    </FormikProvider>
    )
}

export default EditUser;