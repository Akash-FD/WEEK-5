import axios from "axios";
import   { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const { data } = await axios.get(url);
            setData(data);
        };
        fetchdata();
    }, [url]);

    return [data];
};

export default useFetch;
