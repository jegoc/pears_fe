import React from 'react';
import { 
    Alert,
    Container,
    Row,
    Col
} from 'react-bootstrap';

const UnderCons = () =>{
        return (
            <div className="bg-light">
                <Container className="vh-100">
                    <Row className="justify-content-md-center">
                    <Col sm={8} className="my-3 p-3 bg-white rounded shadow-sm justify-content-md-center">
                        <Alert variant="danger">
                        <Alert.Heading>Hi, nice to see you</Alert.Heading>
                        <p>
                           This page is Under Construction!
                        </p>
                        <hr />
                        <p className="mb-0">
                            If you need assistance please contact us.
                        </p>
                        </Alert>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    
export default UnderCons;
