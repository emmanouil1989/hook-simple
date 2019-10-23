import React, {useEffect, useState} from 'react'
import axios from 'axios';

const ResourceList = (props) => {
    const [resources, setResources] = useState([]);
    const {resource} = props;

    //use effect doen't like promises called inside it. it should be normal functions. another solution is to define a function with the async call and immediately call it.
    useEffect(()=>{
        fetchResource(resource);

    },[resource]);

    const fetchResource = async (resource)  => {
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data)
    };

    return(
        <ul>
            {
                resources.map(record =>(
                    <li key={record.id}> {record.title }</li>
                ))
            }
        </ul>
    )
};


export default ResourceList;
