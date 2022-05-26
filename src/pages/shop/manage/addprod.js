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
import ManMenu from './manmenu';
import invmanConst from './invmanConst';
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
    
    const ok = useSelector(state => state.InvManReducer.addInfo);
    const failed = useSelector(state => state.InvManReducer.error);
    const loading = useSelector(state => state.InvManReducer.loading);

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
            unit: "",
            size: "",
            color: "",
            price: "",
            others: "",
            manu: "",
            brand: "",
            model: "",
            serial: ""
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
            unit: Yup.string()
                .required("Unit is required"),
            size: Yup.string()
                .required("Size is required"),
            color: Yup.string()
                .trim()
                .max(20, 'Must be 20 characters or less')
                .matches(/^([a-z\s A-Z])+$/, "Valid characters from a-z or A-Z only."),
            price: Yup.string()
                .trim()
                .matches(/^([0-9\.])+$/, "Valid characters from 0-9 and '.' only.")
                .required("Price is required"),
            others: Yup.string()
                .trim()
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
            manu: Yup.string()
                .trim()
                .max(50, 'Must be 50 characters or less')
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
            brand: Yup.string()
                .trim()
                .max(50, 'Must be 50 characters or less')
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
            model: Yup.string()
                .trim()
                .max(50, 'Must be 50 characters or less')
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
            serial: Yup.string()
                .trim()
                .max(50, 'Must be 50 characters or less')
                .matches(/^([a-z\s A-Z 0-9])+$/, "Valid characters from a-z or A-Z or 0-9 only."),
        }),
        onSubmit: values =>{
            const payload = {
                supid: cookie,
                company: company,
                code: values.code,
                desc: values.desc,
                unit: values.unit,
                size: values.size,
                color: values.color,
                price: values.price,
                others: values.others,
                manu: values.manu,
                brand: values.brand,
                model: values.model,
                serial: values.serial,
            };
    
            dispatch({
                type: invmanConst.addprodRequest,
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
                <ManMenu/>
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
                            maxLength="50"
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
                        <Form.Label>Unit</Form.Label>
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
                    </Col>

                    <Col sm>
                        <Form.Label>Size</Form.Label>
                        <Form.Control 
                            as="select" 
                            name="size"
                            placeholder="Size"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.size}
                        >
                            <option value="" disabled selected>Size</option>
                            <option value="pcs">XSML</option>
                            <option value="pack">SML</option>
                            <option value="box">MED</option>
                            <option value="bottle">LRG</option>
                            <option value="vials">XLRG</option>
                            <option value="vials">XXL</option>
                        </Form.Control>
                        <ErrorMessage name="size">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Col>
                    </Form.Row>

                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control 
                            name="color" 
                            placeholder="Color"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.color}
                        />
                        <ErrorMessage name="color">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Unit Price</Form.Label>
                        <Form.Control 
                            name="price" 
                            placeholder="Price"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                        />
                        <ErrorMessage name="price">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

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
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control 
                            name="manu" 
                            placeholder="Manufacturer"
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.manu}
                        />
                        <ErrorMessage name="manu">
                            {msg => <div style={{color:'red'}}>{msg}</div>}
                        </ErrorMessage>
                    </Form.Group>

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
                    <br/><br/>

                    
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