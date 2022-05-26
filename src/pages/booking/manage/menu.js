import {
    Row,
    Col,
    ListGroup,
    Badge
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Menu = () =>{
    return(
        <div className="container-fluid ">   
            <Row className="justify-content-md-center mt-3">
            <Col xs>
            <ListGroup  variant="flush" className=" rounded">
                    <ListGroup.Item action href="/bookman" variant="light">
                        <FeatherIcon icon="plus" size="18" /> Add Product
                    </ListGroup.Item>
                    <ListGroup.Item action href="/bookmanprod" variant="light">
                        <FeatherIcon icon="clipboard" size="18" /> Manage Product
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="file-plus" size="18" /> Bookings
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
                    <ListGroup.Item action href="/bookcalendar" variant="light">
                        <FeatherIcon icon="calendar" size="18" /> Calendar
                    </ListGroup.Item>
                    <ListGroup.Item action variant="light">
                        <FeatherIcon icon="archive" size="18" /> History
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </div>
    )
}

export default Menu;