import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';
import {
    Row,
    Col,
    Container,
    Button,
    Pagination,
    Form,
    Toast,
    Modal,
    Accordion,
    Card,
    Alert,
    FormControl
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import apiUrl from '../../components/const/apiurl';
import imagesUrl from '../../components/const/imagesUrl';
import Advertise from '../common/advertise';
import Online from '../common/online';
import StarRatings from 'react-star-ratings';

const Shopping = () =>{
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    const [show, setShow] = useState(false);

    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const asss = 'sasfsdfsdfdsfa';
    React.useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get(`${apiUrl.url}searchbookprod/`);
                    setData(res.data);
                    setFilterd(res.data);
                }catch(err){
                    throw new Error(err);
                }
                    };
                fetchData(); 
        },[]);

        useEffect(()=> {
            const results = filtered.filter(res=> 
                res.book_code.toLowerCase().includes(result.toLowerCase()) || 
                res.book_company.toLowerCase().includes(result.toLowerCase()) || 
                res.book_desc.toLowerCase().includes(result.toLowerCase()) 
            );  
            setData(results)
        } ,[result])

      const onChange =(e)=> {
            setResult(e.target.value);
        }

    return(
        <div className="bg-light pt-3">
        <Container>  
            <Row className="justify-content-md-center">
                <Col sm={8}>
                <h6 className="border-bottom border-gray p-2 mb-0">Available for Booking ...</h6>
                    {data.map((r,i)=> ( 
                    <Col key={i} className="my-3 p-2 bg-white rounded shadow-lg justify-content-md-center">
                        <Row>
                            <Col sm>
                                <a href={`${imagesUrl.url}${r.book_picture?r.book_picture:'a.png'}`} target="_blank"><img src={`${imagesUrl.url}${r.book_picture?r.book_picture:'a.png'}`} className="w-100 h-100 mr-3" /></a>
                            </Col>
                            <Col sm={5}>
                                <div className="media text-muted pt-2">
                                    <div className="media-body pb-3 mb-0 small lh-125">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                        
                                        <h5 className="pb-2 mb-0 text-gray-dark">{r.book_desc}</h5>
                                        </div>
                                        <span className="d-block text-gray-dark">by : <a href="#" className="text-gray-dark">{r.book_company}</a></span>
                                    </div>
                                </div>
                                <br/>
                                <StarRatings
                                  rating={2.403}
                                  starDimension="18px"
                                  starSpacing="1px"
                                  starRatedColor="#fcba03"
                                />
                                <span className="d-block text-gray-dark"><a href="#" className="text-gray-dark">Reviews</a></span>
                            </Col>
                            <Col sm className="border-left border-gray justify-content-between">
                                <h5>₱ {r.book_amount.toLocaleString('en-US',{minimumFractionDigits: 2})}</h5>
                                <div className="media text-muted pt-3">
                                    <div className="media-body pb-3 mb-0 small lh-125">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark">{r.book_booked} Booking(s)</strong>
                                        </div>
                                        <span className="d-block">Last Updated: {new Date(r.book_date).toLocaleDateString("en-US",{ weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                </div>
                                <div className="btn-group btn-block">
                                    <Button action href={`./booknow?id=${r.book_id}`} variant="btn btn-outline-danger"><FeatherIcon icon="briefcase" size="16" /> Book Now</Button>
                                </div>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Accordion className="mt-2">
                                    <Card border="info">
                                        <Accordion.Toggle as={Card.Header} variant="outline-success" eventKey="0" className='p-1' style={{cursor: 'pointer'}}>
                                        <div className="text-info text-center"><FeatherIcon icon="tag" size="18" /> More Details ...</div>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {r.book_others}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                    ))
                    }
                </Col>
            <Col sm={4}>
            <Advertise/>
            <Online/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
        </Row>
       </Container>
       </div>
    )
}

export default Shopping;