import React from "react";
import useFetch from "./useFetch";

const FetchData = () => {
    
    const [data] = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      <div>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </div>
    </>
  );
};

export default FetchData;
