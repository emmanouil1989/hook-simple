import React from 'react'
import axios from 'axios';

const ResourceList = () => {


    const fetchResource = async ()  => {
        const response = await axios.get(`https://jsonplaceholder.typecode.com/${this.props.resource}`);
        this.setState({resources: response.data})

    };

    return(
        <div>{this.props.resources.length}</div>
    )
};


export default ResourceList;
