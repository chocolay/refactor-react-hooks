### 1. Create a custom React hook for data fetching
    There are 3 binary states of data:
    . load 
    . error 
    . success

See `src/hooks/useFetch.js`

The ```reducer```: based on a response from ```fetch```, send a ```dispatch```
that indicates the effect we want. 

An action from ```fetch``` may alter more than one state.


### 2. Use in FetchAndList component

### 3. Handle errors and status of loading
    . loading indicator (they provided a loading component)
    . display an error message if there's an error in fetching 
    . simulate delay during data fetching using Mirage JS timing

 `useReducer`, within the hook `useFetch` handles this logic through switch/case in response to dispatches from 
 promises made by the `Fetch` API.

