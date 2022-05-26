import React from 'react';
import { 
    Tabs, 
    Tab,
    Container,
    CardDeck,
    Card,
    Jumbotron,
    Alert
} from 'react-bootstrap';
import imagesUrl from '../../components/const/imagesUrl';
import FeatherIcon from 'feather-icons-react';
import a2 from '../../images/2.jpeg';
import a1 from '../../images/me.JPG';

const About = () =>{
        return (
            <div className="bg-light pb-5"><br/>
          <Container className="bg-light">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Portal">
                <Jumbotron className="bg-white">
                    <Alert variant="light">
                        <Alert.Heading>Pears Portal</Alert.Heading>
                        <hr />
                        <p>
                            Founded : March 2021<br/>
                            
                        </p>
                    </Alert>
                    <Alert variant="primary">
                        <Alert.Heading>Our Mission</Alert.Heading>
                        <hr />
                        <p>
                            Pears Portal is dedicated to help organization and young professionals manage their business and interact with everyone. Pears believe that everyone should have access to information, services, products, and more.
                        </p>
                    </Alert>
                    <Alert variant="success">
                        <Alert.Heading>Our Vision</Alert.Heading>
                        <hr />
                        <p>
                            Pears Portal is dedicated to help organization and young professionals to help manage business and interact with everyone. We believe that everyone should have access to information, services, products, and more.
                        </p>
                    </Alert>
                </Jumbotron>
            </Tab>

            <Tab eventKey="contact" title="How to use">
                <Jumbotron className="bg-white">
                    <h5>Create User</h5>
                        * Click user icon in the upper right corner.
                    <br/>* Select User Registration
                    <br/>* Input required user information 
                </Jumbotron>
                
            </Tab>

            <Tab eventKey="profile" title="Contact Us">
                <Alert variant="light">
                        <Alert.Heading>Pears Portal</Alert.Heading>
                        <hr />
                        <p>
                            Founded : March 2021<br/>
                            
                        </p>
                    </Alert>
            <CardDeck>
                <Card className="m-3">
                    <Card.Img variant="top" src={a1} />
                    <Card.Body>
                    <Card.Title>Joseph Bryan Egoc</Card.Title>
                    <Card.Text>
                        <a href={`${imagesUrl.url}${'resume.pdf'}`} target="_blank">Curriculum Vitae <FeatherIcon icon="download-cloud" size="18" /></a>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Founder - System Developer</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={a2} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className="m-3">
                    <Card.Img variant="top" src={a2} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
            </Tab>
            </Tabs>
            </Container>
            </div>
        );
    }
    
export default About;
