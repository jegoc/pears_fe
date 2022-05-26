import {
    Table,
    Container,
    Row,
    Col,
    Pagination
} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import InvMenu from './invmenu';

const InvReport = () =>{
    return(
        <div className="container-fluid bg-light">   
            <Row className="justify-content-md-center">
            <Col>
                <InvMenu/>
            </Col>
                <Col xs lg="9"  className="my-3 p-3 bg-white rounded shadow-sm">
                <label className="h3"><FeatherIcon icon="credit-card" size="18" /> Payment List</label>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    
                    <div className="btn-toolbar mb-2 mb-md-0">
                        From 
                        <input type="date" className="btn btn-sm btn-outline-secondary" />
                        <label>To </label>
                        <input type="date" className="btn btn-sm btn-outline-secondary" />
                        <button type="button" className="btn btn-sm btn-outline-success"><FeatherIcon icon="refresh-cw" size="18" /> Apply</button>
                    </div>
                    <div className="">
                        
                    </div>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        
                    <div className="btn-group mr-2">
                        
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="share-2" size="18" /> Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="file-text" size="18" /> Export</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary"><FeatherIcon icon="printer" size="18" /> Print</button>
                    </div>
                </div>
                <Table striped bordered hover size="sm">
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
                        <td>@mdo</td>
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