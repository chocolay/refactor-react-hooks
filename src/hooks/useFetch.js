import { useEffect, useReducer } from "react"

//our three states are loading, error, data. They are boolean
const initialState = {
    loading: false,
    error: "",
    data: []
}

//actions: start, finish, error, success
function stateReducer(state, action) {
    switch (action.type) {
            //loading, error and data are still empty
        case "beginFetch":
            return { ...state, loading: true }

            //no longer loading; the error state is no longer "", data still empty
        case "errFetch":
            return { ...state, loading: false, error: action.payload }

            //no longer loading; no error message; the data are filled
        case "successFetch":
            return { ...state, loading: false, error: "", data: action.payload }

            //finally finished with the fetch; error & data don't need to be changed
        case "finishFetch":
            return { ...state, loading: false }

        default:
            return state
    }//switch
}//stateReducer

export function useFetch(endpoint) {

    //determine the state by calling the apiReducer
    const [state, dispatch] = useReducer(stateReducer, initialState);
    useEffect(() => {

        // Don't call the API if endpoint is null or empty
        //why would we even call this function if the endpoint is empty?
        //TODO: try this out
        // if (!endpoint) return;

        //tell the reducer that our action is: start the fetch
        dispatch({type: "beginFetch"})


        fetch(endpoint)
            .then(res => {
                //alter the error message so it's customized
                if (!res.ok) throw Error(res.statusText)
                return res.json()
            })
            //assume we're successful at the fetch action. Our payload is the json
            //from the fetch
            .then(json => {
                dispatch({type: "successFetch", payload: json})
            })
            //if we have an error, catch it. The action is this catch and the payload is the
            //error message
            .catch(error => {
                dispatch({type: "errFetch", payload: error.message})
            })
            //finally, our action is that we're done with the fetch operation
            .finally(() => {
                dispatch({type: "finishFetch"})
            }); //fetch

    }, [endpoint]) //useEffect
    return state
}//useFetch