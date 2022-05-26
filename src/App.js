import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Router, Switch, BrowserRouter} from 'react-router-dom';

//Common
import Header from './pages/common/header';
import Logout from './pages/common/logout';
import UnderCons from './pages/common/under';
import Login from './pages/login';
import Forgot from './pages/login/forgot';
import Home from './pages/home';
import View from './pages/view';
import Registration from './pages/user/registration';
import Company from './pages/company/registration';
import Footer from './pages/common/footer';
import About from './pages/common/about';
import SerError from './pages/common/servererror';
import Search from './pages/search';
import Search1 from './pages/search/search';
import EditUser from './pages/user/edituser';
import history from './history';
import Test from './pages/test';

//Dashboard
import Dashboard from './pages/dashboard';
import DashMenu from './pages/dashboard/dash_menu';


//Booking
import Booking from './pages/booking';
import BookMan from './pages/booking/manage';
import BookCalendar from './pages/booking/manage/calendar';
import BookNow from './pages/booking/booknow';
import BookManProd from './pages/booking/manage/bookmanprod';

//Shopping
import Shopping from './pages/shop';

//Invoice
import AddProd from './pages/shop/manage/addprod';
import ManProd from './pages/shop/manage/manprod';
import InvReport from './pages/shop/reports';
import TransList from './pages/shop/manage/translist';

const App = () => {
  return (
    <Router history={history}>
      <Header/>
      <Switch>
        {/* Common */}
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/logout" component={Logout} />
        <Route path="/servererror" component={SerError} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/undercons" component={UnderCons} />
        <Route path="/view" component={View} />
        <Route path="/registration" component={Registration} />
        <Route path="/search" component={Search} />
        <Route path="/search1" component={Search1} />
        <Route path="/edituser" component={EditUser} />
        <Route path="/company" component={Company} />
        {/* Dashboard */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dash_menu" component={DashMenu} />
        {/* Booking */}
        <Route path="/booking" component={Booking} />
        <Route path="/bookman" component={BookMan} />
        <Route path="/bookcalendar" component={BookCalendar} />
        <Route path="/booknow" component={BookNow} />
        <Route path="/bookmanprod" component={BookManProd} />
         {/* Shopping */}
        <Route path="/shopping" component={Shopping} />
        {/* Invoice */}
        <Route path="/addprod" component={AddProd} />
        <Route path="/manprod" component={ManProd} />
        <Route path="/invreport" component={InvReport} />
        <Route path="/translist" component={TransList} />
        {/* <Route path="/api" component={MainPage} /> */}
        <Route path="/test" component={Test} />
        <Route path="*" component={Home} />
        
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;