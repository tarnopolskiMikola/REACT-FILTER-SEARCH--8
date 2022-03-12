import {useState, useEffect} from 'react';
import axios from 'axios';
//const baseUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
const useServerData = ({url, isButtonClick}) =>{
    const [contactData, setContactDate] = useState([]);

    const[isLoaded, setIsLoaded] = useState(false);

    const getData = () =>{

    }
     

    useEffect(() =>{
     if(!isButtonClick){
       return
     }

        axios(url)
        .then(
          (res)=>{
            setContactDate(res.data);
            // setIsLoading(false)
            setIsLoaded(true)
          }
        );
      }, [url]);
    return[{contactData, setContactDate, isLoaded},  getData ]
}

export default useServerData