import React from 'react'
import FeatherIcon from 'feather-icons-react';
import logo_head from '../../images/pear.png';
import { useDispatch, useSelector } from 'react-redux';
import {
    Navbar,
    Dropdown,
    DropdownButton,
    Nav,
    Badge 
  } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import constant from '../../components/const/constants';
import companyConst from '../company/redux/compConst';
import logoutConst from '../logout/redux/logoutConst';

const cookies = new Cookies();
const cookie = cookies.get('id');
const name = cookies.get('name');
const type = cookies.get('type');
const book = cookies.get('book');
const shop = cookies.get('shop');
const bill = cookies.get('bill');
const dtr = cookies.get('dtr');

const Header = () =>{
  const dispatch = useDispatch();

  const sample = ()=>{
    dispatch({
        type: companyConst.compEditRequest,
        payload: cookie
      });
    }

  const Logout = ()=>{
    dispatch({
        type: logoutConst.logoutRequest,
        payload: cookie
      });
    }

    return (
      <>
          <Navbar bg="white" expand="lg" sticky="top" className="mb-2 shadow">
            <Navbar.Brand href="/"><img src={logo_head} alt="" width="40" height="30"/> {constant.headLogo}</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"><FeatherIcon icon="home" size="18" /> {constant.headHome}</Nav.Link>
                <Nav.Link href="/booking"><FeatherIcon icon="briefcase" size="18" className="text-info" /> {constant.headBooking}</Nav.Link>
                <Nav.Link href="/shopping"><FeatherIcon icon="shopping-bag" size="18" className="text-success " /> {constant.headShop}</Nav.Link>
                <Nav.Link href="/undercons"><FeatherIcon icon="credit-card" size="18" className="text-danger " /> {constant.headBill}</Nav.Link>
                <Nav.Link href="/undercons"><FeatherIcon icon="calendar" size="18" className="text-warning " /> {constant.headDTR}</Nav.Link>
                <Nav.Link href="/about"><FeatherIcon icon="info" size="18" /> {constant.headAbout}</Nav.Link>
              </Nav>
              <Nav>
                {/* {cookie?<Nav.Link href="/search">
                  <FeatherIcon icon="shopping-bag" size="18" />
                  <Badge pill variant="danger">9+</Badge>
                </Nav.Link>:<Nav.Link href="/search" hidden>
                  <FeatherIcon icon="shopping-bag" size="18" />
                  <Badge pill variant="danger">9+</Badge>
                </Nav.Link>}
                {cookie?<Nav.Link href="/search">
                  <FeatherIcon icon="bell" size="18" />
                  <Badge pill variant="danger">9+</Badge>
                </Nav.Link>:<Nav.Link href="/search" hidden>
                  <FeatherIcon icon="bell" size="18" />
                  <Badge pill variant="danger">9+</Badge>
                </Nav.Link>}
                {cookie?<Nav.Link href="/search">
                  <FeatherIcon icon="message-circle" size="18" />
                  <Badge pill variant="danger">3</Badge>
                </Nav.Link>:<Nav.Link href="/search" hidden>
                  <FeatherIcon icon="message-circle" size="18" />
                  <Badge pill variant="danger">3</Badge>
                </Nav.Link>} */}
                
                <DropdownButton
                    menuAlign="right"
                    variant="outline-secondary"
                    title={cookie?"Hi! "+name+" ":<FeatherIcon icon="user" size="18" />}
                    id="dropdown-menu-align-right"
                  >
                    {cookie?"":<Dropdown.Item href="/login"><FeatherIcon icon="log-in" size="18" /> {constant.headLogin}</Dropdown.Item>}
                    {cookie?"":<Dropdown.Item href="/registration"><FeatherIcon icon="users" size="18" /> {constant.headUserReg}</Dropdown.Item>}
                    
                    {cookie?<Dropdown.Item href="/dashboard"><FeatherIcon icon="activity" size="18" /> {constant.headDash}</Dropdown.Item>:""}
                    {/* {book==1?<Dropdown.Item href="/bookman"><FeatherIcon icon="briefcase" size="18" /> {constant.headManBook}</Dropdown.Item>:""} */}
                    {/* {shop==1?<Dropdown.Item href="/addprod"><FeatherIcon icon="shopping-bag" size="18" /> {constant.headManShop}</Dropdown.Item>:""} */}
                    {/* {bill==1?<Dropdown.Item href="/addprod"><FeatherIcon icon="credit-card" size="18" /> {constant.headManBill}</Dropdown.Item>:""} */}
                    {/* {dtr==1?<Dropdown.Item href="/addprod"><FeatherIcon icon="calendar" size="18" /> {constant.headManDTR}</Dropdown.Item>:""} */}
                    {/* {cookie?<Dropdown.Item href="/translist"><FeatherIcon icon="clipboard" size="18" /> {constant.headReports}</Dropdown.Item>:""} */}
                    {cookie?<Dropdown.Divider/>:""}
                    {cookie?<Dropdown.Item onClick={() => sample()}><FeatherIcon icon="anchor" size="18" /> {constant.headPair}</Dropdown.Item>:""}
                    {cookie?<Dropdown.Item href="/edituser" ><FeatherIcon icon="settings" size="18" /> {constant.headSettings}</Dropdown.Item>:""}
                    {cookie?<Dropdown.Item onClick={() => Logout()} ><FeatherIcon icon="log-out" size="18" /> {constant.headLogout}</Dropdown.Item>:""}
                    {/* {cookie?<Dropdown.Item href="/logout"><FeatherIcon icon="log-out" size="18" /> {constant.headLogout}</Dropdown.Item>:""} */}
                  </DropdownButton>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      </>
    );
}

export default Header;
