import {
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import FeatherIcon from 'feather-icons-react';
import Menu from './menu';
import bookConst from './redux/bookConst';
import Check from '../../common/check';
import Cookies from 'universal-cookie';
import QRCode from 'react-qr-code';
import ReCAPTCHA from "react-google-recaptcha";
import { LoadingPage, AddProdSuccess, AddProdFailed } from '../../common/loaderror';

const cookies = new Cookies();
const cookie = cookies.get('id');
const company = cookies.get('company');

const AddProd = () =>{
    const dispatch = useDispatch();
    
    const ok = useSelector(state => state.AddBookProdReducer.bookInfo);
    const failed = useSelector(state => state.AddBookProdReducer.error);
    const loading = useSelector(state => state.AddBookProdReducer.loading);

    const onChange = (value) => {
        console.log("Captcha value:", value)
        // Disabled(false);
    }

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues:{
            code: "",
            desc: "",
            amount: "",
            others: ""
        },
        validationSchema: Yup.object({
            code: Yup.string()
                .trim()
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only.")
                .max(20, 'Must be 20 characters or less')
                .required("Product code is required"),
            desc: Yup.string()
                .trim()
                .max(50, 'Must be 50 characters or less')
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only.")
                .required("Description is required"),
            amount: Yup.string()
                .trim()
                .matches(/^([0-9\.])+$/, "Valid characters from 0-9 and '.' only.")
                .required("Price is required"),
            others: Yup.string()
                .trim()
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
        }),
        onSubmit: values =>{
            const payload = {
                supid: cookie,
                company: company,
                code: values.code,
                desc: values.desc,
                amount: values.amount,
                others: values.others,
            };
    
            dispatch({
                type: bookConst.addbookprodRequest,
                payload: payload
              });
        }
    });

    return(
        <FormikProvider value={formik}>
        <Check/>
        <div className="container-fluid bg-light">   
        
            <Row className="justify-content-md-center">
            <Col sm>
                <Menu/>
            </Col>
                <Col sm lg="9"  className="my-3 p-3 bg-white rounded shadow-sm mr-3 ml-3">
                <Form onSubmit={formik.handleSubmit}>
                <Row>
                <Col sm={6}>
                {loading?<LoadingPage/>:""}
                {ok?<AddProdSuccess/>:""}
                {failed?<AddProdFailed/>:""}

                <label className="h3"><FeatherIcon icon="plus" size="18" /> Add Product</label>
                
                    <Form.Group controlId="code">
                        <Form.Label>Code</Form.Label>
                        <Form.Control 
                            name="code" 
                            maxLength="20"
                            placeholder="Product Code" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.code}
                        />
                        <ErrorMessage name="code">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            name="desc"
                            maxLength="50"
                            placeholder="Description"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.desc}
                        />
                        <ErrorMessage name="desc">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Row>
                        <Col sm> 
                            <Form.Label>Amount</Form.Label>
                            <Form.Control 
                                name="amount" 
                                placeholder="Amount"
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.amount}
                            />
                            <ErrorMessage name="amount">
                                {msg => <div style={{color:'red'}}>{msg}</div>}
                            </ErrorMessage>
                        </Col> 

                        <Col sm>
                            <Form.Label >
                                Price / Per
                            </Form.Label>
                            <Form.Control
                                as="select"
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


                        <Form.File 
                            id="custom-file-translate-scss"
                            label="Upload Picture"
                            className="mt-4 mb-3"
                            lang="en"
                            custom
                        />

                    <Form.Group controlId="Others">
                        <Form.Label>Other Details / Instructions / Reminders</Form.Label>
                        <Form.Control as="textarea"
                            rows={3}
                            name="others"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.others}
                        />
                        <ErrorMessage name="others">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>
                    <br/>
                    
                    
                    </Col>
                    <Col sm={6} className="border-left border-gray justify-content-between">
                    <label className="h3"><FeatherIcon icon="more-horizontal" size="18" /> More Details</label>
                     <Form.Group controlId="manufacturer">
                        <Form.Label>Availability</Form.Label>
                        <Form>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Sun" name="group1" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Mon" name="group1" type={type} id={`inline-${type}-2`} />
                            <Form.Check inline label="Tue" name="group1" type={type} id={`inline-${type}-3`} />
                            <Form.Check inline label="Wed" name="group1" type={type} id={`inline-${type}-4`} />
                            <Form.Check inline label="Thu" name="group1" type={type} id={`inline-${type}-5`} />
                            <Form.Check inline label="Fri" name="group1" type={type} id={`inline-${type}-6`} />
                            <Form.Check inline label="Sat" name="group1" type={type} id={`inline-${type}-7`} />
                            </div>
                        ))}
                        </Form>
                        <ErrorMessage name="manu">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>

                    </Form.Group>

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
                    <QRCode 
                        value={formik.values.code} 
                        size="120" 
                    />
{/*
                    <Form.Group controlId="brand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control 
                            name="brand" 
                            placeholder="Brand"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.brand}
                        />
                        <ErrorMessage name="brand">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="model">
                        <Form.Label>Model</Form.Label>
                        <Form.Control 
                            name="model" 
                            placeholder="Model"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.model}
                        />
                        <ErrorMessage name="model">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="serial">
                        <Form.Label>Serial Number</Form.Label>
                        <Form.Control 
                            name="serial" 
                            placeholder="Serial Number"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.serial}
                        />
                        <ErrorMessage name="serial">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <QRCode 
                        value={formik.values.code} 
                        size="120" 
                    />
                    <br/><br/> */}

                    
                        {/* <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Upload pictures" multiple />
                            </Form.Group>
                        </Form> */}
                        {/* <Test/> */}
                    </Col>
                    
                    </Row>
                    <ReCAPTCHA sitekey="6Le73ZQaAAAAAMiABk5UPq2s-nPc1RCVS0opsrp8" onChange={onChange} />
                    <br/>
                    <Button variant="primary" type="submit" className="btn btn-primary btn-block">
                        <FeatherIcon icon="arrow-right" size="18" /> Submit
                    </Button>
                    </Form>
            </Col>
           
        </Row>
    </div>
    </FormikProvider>
    )
}

export default AddProd;