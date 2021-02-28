import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { sales } from "./mocks";
export const globalContext = React.createContext(null);
const { Provider } = globalContext;

const initialState = {
    data: sales,
    error: "",
    loading: false,
    salesTotal: 42,
    subscriptionsTotal: 100,
}


const App = () => {
    return (
        <Provider value={initialState}>
            <DashboardShell />
        </Provider>
    );
};

export default App;