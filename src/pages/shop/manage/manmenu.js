import {
    Row,
    Col,
    ListGroup,
    Badge
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const ManMenu = () =>{
    return(
        <div className="container-fluid ">   
            <Row className="justify-content-md-center mt-3">
            <Col xs>
            <ListGroup  variant="flush" className=" rounded">
                    <ListGroup.Item action href="/addprod" variant="light">
                        <FeatherIcon icon="plus" size="18" /> Add Product
                    </ListGroup.Item>
                    <ListGroup.Item action href="/manprod" variant="light">
                        <FeatherIcon icon="list" size="18" /> Manage Product
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="file-plus" size="18" /> Sales Order
                        <div className="float-right"><Badge pill variant="danger">9+</Badge></div>
                    </ListGroup.Item>
                    <ListGroup.Item action href="/translist" variant="light">
                        <FeatherIcon icon="list" size="18" /> Transaction List
                        <div className="float-right"><Badge pill variant="danger">9+</Badge></div>
                    </ListGroup.Item>
                    <ListGroup.Item action href="/invreport" variant="light">
                        <FeatherIcon icon="credit-card" size="18" /> Payment List
                        <div className="float-right"><Badge pill variant="danger">9+</Badge></div>
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
                    
                </ListGroup>
            </Col>
        </Row>
    </div>
    )
}

export default ManMenu;