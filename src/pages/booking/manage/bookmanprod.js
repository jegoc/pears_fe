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
import apiUrl from '../../../components/const/apiurl';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('id');

const ManProd = () =>{
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState([]);
    const asss = 'sasfsdfsdfdsfa';

    React.useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get(`${apiUrl.url}getbookprod/${cookie}`);
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
                res.book_desc.toLowerCase().includes(result.toLowerCase())
            ); 
            setData(results)
        } ,[result])

      const onChange =(e)=> {
            setResult(e.target.value);
        }

    return(
        <div className="container-fluid bg-light">   
            <Row className="justify-content-md-center">
            <Col>
                <Menu/>
            </Col>
                <Col xs lg="9"  className="my-3 p-3 bg-white rounded shadow-sm mr-3 ml-3">
                <label className="h3"><FeatherIcon icon="list" size="18" /> Manage Product</label>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    
                    <div className=" mb-2 mb-md-0">
                        <FormControl 
                            type="text" 
                            name="search"
                            placeholder='Search...'
                            className="mr-sm-2 w-100" 
                            value={result}
                            onChange={onChange}
                            />
                    </div>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="share-2" size="18" /> Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="file-text" size="18" /> Export</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="printer" size="18" /> Print</button>
                    </div>
                </div>
                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr style={{textAlign:"center"}}>
                        <th>#</th>
                        <th>Code</th>
                        <th>Desc</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((r,i)=> (   
                            <tr key={i}>
                                <td style={{textAlign:"center"}}>{i+1}</td>
                                <td>{r.book_code}</td>
                                <td>{r.book_desc}</td>
                                <td style={{textAlign:"right"}}>{r.book_amount}</td>
                                <td style={{textAlign:"center"}}>{r.book_status===1?'Active':<label style={{color:"red"}}>Inactive</label>}</td>
                                <td style={{textAlign:"center"}}>
                                    <OverlayTrigger overlay={<Tooltip>Update / Edit</Tooltip>}>
                                        <a href={`./view?${asss}`} className="btn-sm btn-outline-none"><FeatherIcon icon="edit" size="18" /> </a>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}>
                                        <a href="#" className="btn-sm btn-outline-none"><FeatherIcon icon="trash-2" size="18" /> </a>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Col>
        </Row>
    </div>
    )
}

export default ManProd;