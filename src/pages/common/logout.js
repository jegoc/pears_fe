import Cookies from 'universal-cookie';
import history from '../../history';

const cookies = new Cookies();

const Logout = () =>{
    cookies.set('id','',{path:'/'});
    cookies.set('name','',{path:'/'});
    cookies.set('company','',{path:'/'});
    cookies.set('type','',{path:'/'});
    cookies.set('book','',{path:'/'});
    cookies.set('shop','',{path:'/'});
    cookies.set('bill','',{path:'/'});
    cookies.set('dtr','',{path:'/'});
    
    return(
        <>
            {history.push('/login')}
            {/* {window.location.reload(false)} */}
        </>
    );
}

export default Logout;