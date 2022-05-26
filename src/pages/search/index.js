import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';
import {
    CardDeck,
    Card,
    Row,
    Col,
    Container,
    Button,
    Pagination,
    Form,
    FormControl
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import a1 from '../../images/1.jpg';
import a2 from '../../images/2.jpeg';

const Search = () =>{
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");
    // const { todos, currentPage, todosPerPage } = this.state;
    const asss = 'sasfsdfsdfdsfa';
    React.useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get('http://localhost:8888/express/searchprod');
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
                res.prod_code.toLowerCase().includes(result) || 
                res.prod_unit.toLowerCase().includes(result) || 
                res.prod_desc.toLowerCase().includes(result)
            );  
            setData(results)
        } ,[result])
        // console.log(filtered)

        React.useEffect(() => {
            const results = filtered.filter(res=> 
                res.prod_code.toLowerCase().includes(result) || 
                res.prod_unit.toLowerCase().includes(result) || 
                res.prod_desc.toLowerCase().includes(result)
            ); 
            setData(results);
            }, [result]);

      const onChange =(e)=> {
            setResult(e.target.value);
        }

        // const groups = data.map((r,i)=> (
        //     <Card className="shadow-sm" key={i}>
        //         <Card.Img variant="top" src={a2} />
        //         <Card.Body>
        //         <Card.Title>{r.user_fname}</Card.Title>
        //         <Card.Text>
        //             Ayanna Soocutelents and Cactus
        //         </Card.Text>
        //         </Card.Body>
        //             <Button action href={`./view?${asss}`} variant="outline-info"><FeatherIcon icon="tag" /> View Details</Button>
        //             <Button variant="outline-danger"><FeatherIcon icon="shopping-bag" /> Add to Bag</Button>
        //         <Card.Footer>
        //         <small className="text-muted">Last updated 3 mins ago</small>
        //         </Card.Footer>
        //     </Card>
        // ));

    return(
        <div className="bg-light pt-3">
        <Container>  
        <Form inline className="justify-content-center w-100">
                <FormControl 
                  type="text" 
                  name="search"
                  placeholder="Search...." 
                  className="mr-sm-2 w-50" 
                  value={result}
                    onChange={onChange}
                />
                {/* <Button variant="outline-success" href="/search">
                  <FeatherIcon icon="search" size="18" /> Search
                </Button> */}
              </Form>
            <Row className="justify-content-md-center">
                <Col sm={8} className="my-3 p-3 bg-white rounded shadow-sm justify-content-md-center">
                {/* <CardDeck>{groups}</CardDeck> */}
                <div>
                    <h6 className="border-bottom border-gray pb-2 mb-0">Search Results</h6>
                    {data.map((r,i)=> ( 
                    <div className="media text-muted pt-3" key={i}>
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                            <strong className="text-gray-dark">{r.prod_desc}</strong> 
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <Button action href={`./view?${asss}`} variant="btn btn-sm btn-outline-info"><FeatherIcon icon="tag" size="16" /> Details</Button>
                                <Button variant="btn btn-sm btn-outline-danger"><FeatherIcon icon="shopping-bag" size="16" /> Add to Bag</Button>
                                {/* <button type="button" className="btn btn-sm btn-outline-info" action href={`./view?${asss}`}><FeatherIcon icon="tag" size="18" /> Details</button>
                                <button type="button" className="btn btn-sm btn-outline-danger"><FeatherIcon icon="shopping-bag" size="18" /> Add to Bag</button> */}
                            </div>
                                {/* <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="printer" size="18" /> Print</button> */}
                            </div>
                            </div>
                            
                            <span className="d-block"><a href="#" className="text-gray-dark">Ayanna Soocutelents and Cactus</a></span>
                        </div>
                    </div>
                    ))
                    }
                    <small className="d-block text-right mt-3">
                    <a href="#">All suggestions</a>
                    </small>
                </div>
                <br/>
                {/* <Pagination size="sm">{items}</Pagination> */}
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
            <Col sm={4}>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
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
       </Container>
       </div>
    )
}

export default Search;