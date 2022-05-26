import {
    Carousel,
    Container,
    Row,
    Card,
    Col,
    Form,
    FormControl,
    CardDeck
} from 'react-bootstrap';
import constant from '../../components/const/constants';
import node from '../../images/node.jpg';
import me from '../../images/me.jpg';
import reactjs from '../../images/reactjs.png';
import mysql from '../../images/mysql.png';
import php from '../../images/php.png';
import postgre from '../../images/postgre.jpeg';
import spring from '../../images/spring.png';
import javascript from '../../images/javascript.png';
import typescript from '../../images/typescript.png';
import html from '../../images/html.png';
import FeatherIcon from 'feather-icons-react';

const Home = () =>{
    return(
      <div className="bg-light pt-3">
        <Container>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col>
              <a href="#"><Card className="mb-3 rounded shadow-lg">
                <Card.Img variant="top" src={reactjs} />
                <Card.Body>
                  <Card.Title>Company Name</Card.Title>
                  <Card.Text>
                    This is a longer card with 
                  </Card.Text>
                </Card.Body>
              </Card></a>
            </Col>
          ))}
        </Row>

        {/* <Row className="justify-content-md-center">
            <Col sm={12} className="my-1 p-1 bg-white rounded shadow-lg">
              <div className="row justify-content-md-center">
                  <div className="col-md-2 m-2">
                        <div className="card border-info p-3">
                          <a href="/booking">
                            <div className="text-info text-center mt-3"><FeatherIcon icon="briefcase" size="50" className="text-info" /></div>
                            <div className="text-danger text-center mt-3"><h6 className="text-info">{constant.homeBooking}</h6></div>
                            <div className="text-info text-center mt-2"><h1 className="text-info">234</h1></div>
                          </a>
                        </div>
                    </div>
                    <div className="col-md-2 m-2">
                        <div className="card border-success p-3">
                          <a href="/shopping">
                            <div className="text-info text-center mt-3"><FeatherIcon icon="shopping-bag" size="50" className="text-success " /></div>
                            <div className="text-danger text-center mt-3"><h6 className="text-success">Shopping</h6></div>
                            <div className="text-success text-center mt-2"><h1 className="text-success">332</h1></div>
                          </a>
                        </div>
                    </div>
                    <div className="col-md-2 m-2">
                        <div className="card border-danger mx-sm-1 p-3">
                          <a href="/undercons">
                              <div className="text-info text-center mt-3"><FeatherIcon icon="credit-card" size="50" className="text-danger" /></div>
                              <div className="text-danger text-center mt-3"><h6 className="text-danger">Billing</h6></div>
                              <div className="text-danger text-center mt-2"><h1 className="text-danger">346</h1></div>
                          </a>
                        </div>
                    </div>
                    <div className="col-md-2 m-2">
                        <div className="card border-warning mx-sm-1 p-3">
                          <a href="/undercons">
                              <div className="text-info text-center mt-3"><FeatherIcon icon="calendar" size="50" className="text-warning" /></div>
                              <div className="text-warning text-center mt-3"><h6 className="text-warning">DTR</h6></div>
                              <div className="text-warning text-center mt-2"><h1 className="text-warning">346</h1></div>
                          </a>
                        </div>
                    </div>
              </div>
            </Col>
        </Row> */}
        
        <Row className="justify-content-md-center">
            <CardDeck>
                <Card className="m-3">
                    <Card.Img variant="top" src={postgre} />
                    <Card.Body>
                    <Card.Title>Joseph Bryan Egoc</Card.Title>
                    <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark">
                      <big className="text-light bg-dark">Free Plan</big>
                    </Card.Footer>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={postgre} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark">
                      <big className="text-light bg-dark">Monthly Plan</big>
                    </Card.Footer>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={postgre} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark">
                      <big className="text-light bg-dark">Yearly Plan</big>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Row>

        <Row className="justify-content-md-center">
            <Col sm={8} className="my-3 p-3 bg-white rounded shadow-lg">
              <div className="">
                <h5 className="border-bottom border-gray pb-2 mb-0">Technology</h5>
                <div className="media text-muted pt-3">
                  <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={reactjs}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={mysql}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="31%" 
                    src={node}
                    />
                </div>

                <div className="media text-muted pt-5">
                  <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={php}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={spring}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={postgre}
                    />
                </div>

                <div className="media text-muted pt-5">
                  <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={typescript}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={javascript}
                    />
                    <img
                    className="d-block mr-2 rounded"
                    width="32%" 
                    src={html}
                    />
                </div>
                
                <small className="d-block text-right mt-3">
                  <a href="#">All updates</a>
                </small>
              </div>
            </Col>
            <Col sm={4}>
            <div className="my-3 p-3 bg-white rounded shadow-lg">
                <h6 className="border-bottom border-gray pb-2 mb-0">The Team</h6>
                <div className="media text-muted pt-3">
                  <img src={me} className="bd-placeholder-img mr-2 rounded" width="32" height="32" />
                  <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <strong className="text-gray-dark">Joseph Bryan M. Egoc</strong>
                      <a href="/about">View</a>
                    </div>
                    <span className="d-block">Developer</span>
                  </div>
                </div>
                <small className="d-block text-right mt-3">
                  <a href="#">About Us</a>
                </small>
              </div>
            </Col>
        </Row>
    </Container>
    </div>
    )
}

export default Home;