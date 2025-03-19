import React, { useRef } from 'react'

const UseRefHook = () => {
 
    // let count = useRef(0);

    // const increment =() =>{
    //     count.current = count.current + 1;
    //     console.log(count);
        
    // }

    const h2 = useRef();

    const myref = () =>{
        h2.current.style.color = 'red' 
    }
  
    return (        
      <>
        {/* <h1>Render Count: {count.current}</h1> */}
        <h2 ref={myref}>sasa</h2>
        {/* <button onClick={()=>increment()}>+</button> */}
      </>
    );
  
}

export default UseRefHook