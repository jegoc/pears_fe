import React ,{ useState  , useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button,
    Form,
    Container,
    Row,
    Col,
    Alert,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';
import companyConst from './redux/compConst';
import { ErrorMessage, useFormik, FormikProvider, Field } from 'formik';
import { LoadingPage, RegSuccess, RegFailed } from '../common/loaderror';
import * as Yup from 'yup';
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('id');

const Registration = () =>{
const dispatch = useDispatch();
const ok = useSelector(state => state.CompanyReducer.registerInfo);
const failed = useSelector(state => state.CompanyReducer.error);
const loading = useSelector(state => state.CompanyReducer.loading);


const company = useSelector(state => state.CompanyReducer.companyInfo.user_company);

// const company = useSelector(state => state.CompanyReducer.company);
const fname = useSelector(state => state.CompanyReducer.companyInfo.user_fname);
const mi = useSelector(state => state.CompanyReducer.companyInfo.user_mi);
const lname = useSelector(state => state.CompanyReducer.companyInfo.user_lname);
const address = useSelector(state => state.CompanyReducer.companyInfo.user_address);
const email = useSelector(state => state.CompanyReducer.companyInfo.user_email);
const cellphone = useSelector(state => state.CompanyReducer.companyInfo.user_cellphone);

const onChange = (value) => {
    console.log("Captcha value:", value)
    // Disabled(false);
}

const generateInitialValues = () => {
    return {
        userid: "",
        company: company,
        address: address,
        cellphone: cellphone,
        email: email,
        fname: fname,
        mi: mi,
        lname: lname,
        account: "",
    }
}

const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: generateInitialValues(),
    validationSchema: Yup.object({
        company: Yup.string()
            .trim()
            .max(50, 'Must be 50 characters or less')
            .required("Company name is required"),
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
            .matches(/^([0-9]{11})+$/, "Please input valid cellphone # ex: 09XXXXXXXX.")
            .required("Cellphone number is required."),
    }),
    onSubmit: values =>{
        const payload = {
            userid: cookie,
            company: values.company,
            address: values.address,
            email: values.email,
            cellphone: values.cellphone,
            fname: values.fname,
            mi: values.mi,
            lname: values.lname,
            account: values.account,
        };

        dispatch({
            type: companyConst.companyRequest,
            payload: payload
          });
    }
});

return(
    <FormikProvider enableReinitialize={true} value={formik}>
        {console.log(formik)}
        <div className="bg-light">
        <Container>
            {loading?<LoadingPage/>:""}

            <Row className="justify-content-md-center">
                <Col xs lg="8"  className="my-3 p-3 bg-white rounded shadow-sm">
                {ok?<RegSuccess/>:""}
                {failed?<RegFailed/>:""}
                <Alert variant="warning">
                <Alert.Heading>Pair with Pears - account registration</Alert.Heading>
                <hr />
                <p className="mb-0">
                   Please input your information accurately. <br/>Within 24hrs our representative will contact you for confirmation. 
                   <br/>Thank you for registration!
                </p>
                </Alert><br/>

                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group controlId="formCompany">
                        <Form.Label>Company Name / Institution</Form.Label>
                        <Form.Control 
                            name="company" 
                            placeholder="Company Name" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.company}
                        />
                        <ErrorMessage name="company">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="compType">
                        <Form.Label>Select Account Type</Form.Label>
                        <ToggleButtonGroup type="checkbox" className="mb-2 w-100" name="account">
                            <ToggleButton variant="outline-secondary" value={1}>Booking</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={2}>Shopping</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={3}>Billing</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={4}>DTR</ToggleButton>
                        </ToggleButtonGroup>
                    </Form.Group>

                    <h5>Contact Person</h5>
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                name="fname" 
                                placeholder="First Name" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.fname}
                            />
                            <ErrorMessage name="fname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMI">
                            <Form.Label>MI</Form.Label>
                            <Form.Control 
                                name="mi" 
                                placeholder="MI" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.mi}
                            />
                            <ErrorMessage name="mi">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                name="lname" 
                                placeholder="Last Name" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.lname}
                            />
                            <ErrorMessage name="lname">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name="address"
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
                            placeholder="09XXXXXXXXX" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.cellphone}
                            required
                        />
                        <ErrorMessage name="cellphone">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>
                    
                    <ReCAPTCHA sitekey="6Le73ZQaAAAAAMiABk5UPq2s-nPc1RCVS0opsrp8" onChange={onChange} />
                    <br/>
                    
                    <Button variant="primary" type="submit" className="btn btn-primary btn-block">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    </FormikProvider>
)
};

export default Registration;