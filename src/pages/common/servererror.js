import Cookies from 'universal-cookie';
import history from '../../history';

const cookies = new Cookies();

const Logout = () =>{
    cookies.set('id','',{path:'/'});
    cookies.set('name','',{path:'/'});
    
    return(
        <>
            <div>server error</div>
        </>
    );
}

export default Logout;