import React ,{ useState  , useEffect} from 'react';
import axios from 'axios';

export default function Search() {
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    React.useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get('http://localhost:8888/express/users');
                    setData(res.data);
                    setFilterd(res.data);
                }catch(err){
                    throw new Error(err);
                }
                    };
                fetchData(); 
        },[]);

        useEffect(()=> {
            const results = filtered.filter(res=> res.user_fname.toLowerCase().includes(result)

            ); 
            setData(results)
        } ,[result])
        console.log(data)
        React.useEffect(() => {
                const results = filtered.filter(res =>
                  res.user_fname.toLowerCase().includes(result)
                );
                setData(results);
              }, [result]);

      const onChange =(e)=> {
            setResult(e.target.value);
        }

    return (
        <div>
        <input 
            type="text"
            placeholder="serch here .."
            value={result}
            onChange={onChange}
        />
        {data.map((r,i)=> (   
                <ul key={i}>
                <li>{r.user_fname}</li>
                </ul>
                ))
        }
    </div>
    )  
}