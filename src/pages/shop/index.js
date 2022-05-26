import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';
import {
    Row,
    Col,
    Container,
    Button,
    Pagination,
    Form,
    FormControl
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import apiUrl from '../../components/const/apiurl';
import Advertise from '../common/advertise';
import StarRatings from 'react-star-ratings';
import a1 from '../../images/1.jpg';
import a2 from '../../images/2.jpeg';

const Shopping = () =>{
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    
    const asss = 'sasfsdfsdfdsfa';
    React.useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get(`${apiUrl.url}searchprod/`);
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
                res.prod_code.toLowerCase().includes(result.toLowerCase()) || 
                res.prod_unit.toLowerCase().includes(result.toLowerCase()) || 
                res.prod_desc.toLowerCase().includes(result.toLowerCase()) 
            );  
            setData(results)
        } ,[result])

        React.useEffect(() => {
            const results = filtered.filter(res=> 
                res.prod_code.toLowerCase().includes(result.toLowerCase()) || 
                res.prod_unit.toLowerCase().includes(result.toLowerCase()) || 
                res.prod_desc.toLowerCase().includes(result.toLowerCase()) 
            ); 
            setData(results);
            }, [result]);

      const onChange =(e)=> {
            setResult(e.target.value);
        }

    return(
        <div className="bg-light pt-3">
        <Container>  
        <Form inline className="justify-content-center w-100">
                <FormControl 
                  type="text" 
                  name="search"
                  placeholder="Search...." 
                  className="mr-sm-2 w-100" 
                  value={result}
                    onChange={onChange}
                />
              </Form>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                <h6 className="border-bottom border-gray p-2 mb-0">Shopping Results ...</h6>
                    {data.map((r,i)=> ( 
                    <Col key={i} className="my-3 p-2 bg-white rounded shadow-lg justify-content-md-center">
                        <Row>
                            <Col sm>
                                <img src={a2} className="w-100 h-100 mr-3" />
                            </Col>
                            <Col sm={5}>
                                <div className="media text-muted pt-2">
                                    <div className="media-body pb-3 mb-0 small lh-125">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                        
                                        <h6 className="pb-2 mb-0 text-gray-dark">{r.prod_desc}</h6>
                                        </div>
                                        <span className="d-block text-gray-dark">by : <a href="#" className="text-gray-dark">{r.prod_company}</a></span>
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
                                <h5> {r.prod_price.toLocaleString('en-US',{style:'currency', currency: 'PHP',})}</h5>
                                <div className="media text-muted pt-3">
                                    <div className="media-body pb-3 mb-0 small lh-125">
                                        <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark">{r.prod_sold} Sold</strong>
                                        </div>
                                        <span className="d-block">Last Updated: {new Date(r.prod_date).toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <Button action href={`./view?${asss}`} variant="btn btn-sm btn-outline-success"><FeatherIcon icon="tag" size="16" /> Details</Button>
                                    <Button variant="btn btn-sm btn-outline-danger"><FeatherIcon icon="shopping-bag" size="16" /> Bag Now</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    ))
                    }
                
                </Col>
            <Col sm={4}>
            <Advertise/>
              <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Online Users</h6>
                <div className="media text-muted pt-3">
                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                  <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Chat</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <div className="media text-muted pt-3">
                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                  <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <div className="media text-muted pt-3">
                  <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                  <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <small className="d-block text-right mt-3">
                  <a href="#">All suggestions</a>
                </small>
              </div>
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