import Cookies from 'universal-cookie';
import history from '../../history';

const cookies = new Cookies();
const cookie = cookies.get('id');

const Check = () =>{
    if(cookie==''){
        return(
            <>
                {history.push('/login')}
            </>
        );
    }else{
        return(
            <>
                {null}
            </>
        );
    }
}

export default Check;