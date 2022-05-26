import React from 'react';
import {
    Table,
    Container,
    Row,
    Col,
    Card,
    Pagination,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {useFormik,FormikProvider} from 'formik';
// import FeatherIcon from 'feather-icons-react';
import reactjs from '../../images/reactjs.png';
import DashMenu from './dash_menu';

const Dashboard =()=> {
  
 const formik = useFormik({

 });
  
    return (
      <FormikProvider value={formik}>
        <div className="container-fluid bg-light">   
          <Row className="justify-content-md-center">
            <Col>
                <DashMenu/>
            </Col>
            <Col xs lg="9"  className="my-3 p-3 bg-white rounded shadow-sm mr-3 ">
              <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Col>
                    <a href="#"><Card className="mb-3 rounded shadow-lg">
                      <Card.Img variant="top" src={reactjs} />
                      <Card.Body>
                        <Card.Title>Company Name</Card.Title>
                        <Card.Text>
                          This is a longer card with 
                        </Card.Text>
                      </Card.Body>
                    </Card></a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </FormikProvider>
    );
};

export default Dashboard;