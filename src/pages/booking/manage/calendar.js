import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';
import {
    Table,
    Row,
    Col,
    Pagination,
    Tooltip,
    FormControl,
    OverlayTrigger,
    Form
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Menu from './menu';
import BookCalendar1 from './calendar1';
import apiUrl from '../../../components/const/apiurl';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('id');

const ManProd = () =>{
    

    return(
        <div className="container-fluid bg-light">   
            <Row className="justify-content-md-center">
            <Col>
                <Menu/>
            </Col>
                <Col xs lg="9"  className="my-3 p-3 bg-white rounded shadow-sm mr-3">
                <label className="h3"><FeatherIcon icon="list" size="18" /> Calendar Schedules</label>
                <BookCalendar1/>
            </Col>
        </Row>
    </div>
    )
}

export default ManProd;