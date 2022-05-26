import {
    Row,
    Col,
    ListGroup,
    Badge
} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import FeatherIcon from 'feather-icons-react';
import constant from '../../components/const/constants';

const cookies = new Cookies();
const cookie = cookies.get('id');
const name = cookies.get('name');
const type = cookies.get('type');
const book = cookies.get('book');
const shop = cookies.get('shop');
const bill = cookies.get('bill');
const dtr = cookies.get('dtr');

const DashMenu = () =>{
    return(
        <div className="container-fluid ">   
            <Row className="justify-content-md-center mt-3">
            <Col xs>
            <ListGroup  variant="flush" className=" rounded">
                    <ListGroup.Item action href="/dashboard" variant="light">
                        <FeatherIcon icon="grid" size="18" /> {constant.headDash}
                    </ListGroup.Item>
                    {book==1?<ListGroup.Item action href="/bookman" variant="light"><FeatherIcon icon="briefcase" size="18" /> {constant.headManBook}</ListGroup.Item>:""}
                    {shop==1?<ListGroup.Item action href="/dashboard" variant="light"><FeatherIcon icon="shopping-bag" size="18" /> {constant.headManShop}</ListGroup.Item>:""}
                    {bill==1?<ListGroup.Item action href="/dashboard" variant="light"><FeatherIcon icon="credit-card" size="18" /> {constant.headManBill}</ListGroup.Item>:""}
                    {dtr==1?<ListGroup.Item action href="/dashboard" variant="light"><FeatherIcon icon="calendar" size="18" /> {constant.headManDTR}</ListGroup.Item>:""}
                    
                    <ListGroup.Item action href="/dashboard" variant="light">
                        <FeatherIcon icon="bell" size="18" /> Notification
                        <div className="float-right"><Badge pill variant="danger">9+</Badge></div>
                    </ListGroup.Item>
                    <ListGroup.Item action href="/dashboard" variant="light">
                        <FeatherIcon icon="message-circle" size="18" /> Messages
                        <div className="float-right"><Badge pill variant="danger">9+</Badge></div>
                    </ListGroup.Item>
{/* 
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
                    </ListGroup.Item> */}
                    
                </ListGroup>
            </Col>
        </Row>
    </div>
    )
}

export default DashMenu;