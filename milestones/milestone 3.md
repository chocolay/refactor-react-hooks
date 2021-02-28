### 1. Wrap the app with a Context Provider
    - move the Provider into App.js
    - give the Context a static object (the initialState from the reducer function
    - include salesTotal & subscriptionsTotal in the state specification 

    
### 2. Connect the child components to the Context
    Which states were connected to the Redux store? Refactor so they use Context with hooks
    Remove any `constructor`,`connect`,`mapDispatchToProps`,`render` related to Redux from these components

### 3. Refactor the class component in DashboardShell 
    - removing logic related to Redux
    - use select.js in the dashboard 
    - get rid of the class and use hooks to manage the internal state 

don't work on the logic in componentDidMount and handleSelectChange (commented out or it doesn't work)


##Deliverables:
    - changes to `src/App.js` and `src/index.js`
    - appropriate child components connected to the React Context
    - refactored `src/features/Dashboard/DashboardShell.js/DashboardShell.js`
