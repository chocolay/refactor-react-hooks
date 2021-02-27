import React from "react"

//import the custom hooks
import { useFetch } from "../../hooks/useFetch"

//import the custom components we'll use
import Date from './Date'
import Loading from "./Loading"

//import testing code
import PropTypes from "prop-types"


export default function FetchAndList({ endpoint }) {
    //our three states are loading, error, data
    const { loading, error, data } = useFetch(endpoint)

    //return the UI
    //need to be expressed as an executed function
    //so we can code the logic in javascript

    return (() => {
        if (loading) return <Loading />

        //if we're still in the loading state and there's an error, then tell user
        if (loading || error) return <p>The data was not returned due to this error: {error}</p>

        //we've made it!
        if (!loading && !error)
            //TODO: format this ugly list
            //TODO: probably should be its own component
            return (
                <ul>
                    {data.map(e => (
                     <li key = {e.timestamp}>  <Date dateString={e.timestamp}  />: {e.amount} </li>
                    ))}
                </ul>
            )
    })()
}//FetchAndList

//test
FetchAndList.propTypes = {
    endpoint: PropTypes.string.isRequired
}
