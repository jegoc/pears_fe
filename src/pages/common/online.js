import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';
import {
    FormControl,
    Image,
    ListGroup
} from 'react-bootstrap';
import apiUrl from '../../components/const/apiurl';
import imagesUrl from '../../components/const/imagesUrl';
import FeatherIcon from 'feather-icons-react';

const Online = () =>{
  const [data ,setData] = useState([]);
  const [filtered ,setFilterd] = useState([]);
  const [result , setResult] = useState("");

  React.useEffect(()=>{
    const fetchData = async ()=> {
            try{
                const res = await axios.get(`${apiUrl.url}onlineusers/`);
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
            res.user_fname.toLowerCase().includes(result.toLowerCase()) || 
            res.user_lname.toLowerCase().includes(result.toLowerCase()) || 
            res.user_email.toLowerCase().includes(result.toLowerCase()) 
        );  
        setData(results)
    } ,[result])

    const onChange =(e)=> {
      setResult(e.target.value);
  }

        return (
            <> 
            
              <div className="my-3 p-1 bg-white rounded shadow-sm" >
                {/* <h6 className="border-bottom border-gray pb-2 mb-0">Online Users</h6> */}
                <FormControl 
                  type="text" 
                  name="search"
                  placeholder="Search Online Users ..." 
                  className="mr-sm-2 w-100" 
                  value={result}
                  onChange={onChange}
                />
            <ListGroup  variant="flush" className="p-0 rounded" style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
            {data.map((r,i)=> ( 
              
                <ListGroup.Item key={i} action href={i} variant="light" className="p-2">
                 <div className="media text-muted">
                    <Image 
                        style={{ width: '30px', height: '30px' }}
                        className="shadow-sm"
                        src={`${imagesUrl.url}${r.user_pic?r.user_pic:'avatar.png'}`}
                        fluid ="true"
                        roundedCircle />
                  <div className="media-body pb-0 mb-0 small ">
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <strong className="text-gray-dark ml-2">{r.user_fname} {r.user_lname}</strong>
                        <FeatherIcon icon="message-circle" size="18" className="text-success" />
                    </div>
                    <span className="d-block ml-2">@{r.user_username}</span>
                  </div>
                </div>
                </ListGroup.Item>
            ))
            }
             </ListGroup>
              </div>
            </>
        );
    }
    
export default Online;
