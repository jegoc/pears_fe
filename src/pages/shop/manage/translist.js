import {
    Table,
    Container,
    Row,
    Col,
    Pagination,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import ManMenu from './manmenu';

const InvReport = () =>{
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substr(0,10);

    return(
        <div className="container-fluid bg-light">   
            <Row className="justify-content-md-center">
            <Col>
                <ManMenu/>
            </Col>
                <Col xs lg="9"  className="my-3 p-3 bg-white rounded shadow-sm mr-3 ">
                <label className="h3"><FeatherIcon icon="list" size="18" /> Transaction List</label>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">From</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="date" defaultValue={date} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">To</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl type="date" defaultValue={date} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            <InputGroup.Append>
                                <Button variant="outline-success"><FeatherIcon icon="refresh-cw" size="14" /> Apply</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        
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
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                        <a href="#" className="btn-sm btn-outline-none"><FeatherIcon icon="eye" size="18" /> View</a>
                        </td>
                        </tr>
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

export default InvReport;