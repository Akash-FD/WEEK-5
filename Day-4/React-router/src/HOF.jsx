
import React from 'react'
import { useState, useEffect } from "react";

const HOF = (WrappedPostComponent, fetchData) => {
  return (
      function (props) {
        console.log(props);
        
      
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedPostComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    )

})}

const fetchPosts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const PostComponent = ({ data, isLoading, error }) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export const PostComponentWithData = HOF(PostComponent, fetchPosts);



export default HOF