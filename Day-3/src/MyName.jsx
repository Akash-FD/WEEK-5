import React, { memo} from 'react'

const MyName = (props) => {
   
        // const [myname, setMyname] = useState('Akash')
    
        return (
            <>
              {console.log("CustomLabel component render")}
              <label>
                <b>{props.username.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })}</b>
              </label>
            </>
          );
    }


export default memo(MyName)