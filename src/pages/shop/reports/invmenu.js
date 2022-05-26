import {
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const InvReport = () =>{
    return(
        <div className="container-fluid ">   
            <Row className="justify-content-md-center">
            <Col xs>
            <ListGroup  variant="flush" className=" rounded">
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="file-plus" size="18" /> Sales Order
                    </ListGroup.Item>
                    <ListGroup.Item action href="/translist" variant="light">
                        <FeatherIcon icon="list" size="18" /> Transaction List
                    </ListGroup.Item>
                    <ListGroup.Item action href="/invreport" variant="light">
                        <FeatherIcon icon="credit-card" size="18" /> Payment List
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="user" size="18" /> Sales Per Customer
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="box" size="18" /> Sales Per Product
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="book-open" size="18" /> Customer Ledger
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="package" size="18" /> Product Inventory 
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="list" size="18" /> Transaction List
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="list" size="18" /> Transaction List
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </div>
    )
}

export default InvReport;