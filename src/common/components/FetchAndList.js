import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


//create a component to fetch the data from the API
//and then display it in a list
//uses the useEffect hook

export default function FetchAndList({ endpoint }) {
    const [data, setData] = useState([])

    useEffect( () => {
        fetch(endpoint)
            .then(res => res.json())
            .then(json => setData(json))
    }, [endpoint])

    //TODO: format this ugly list
    return (
        <ul>
            {data.map(e => (
                <li key = {e.timestamp}>{e.timestamp} : {e.amount} </li>
            ))}
        </ul>
    )
}

FetchAndList.propTypes = {
    endpoint: PropTypes.string.isRequired
}


