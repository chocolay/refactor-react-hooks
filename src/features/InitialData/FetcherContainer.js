import React, { useState } from 'react'
import SelectInput from '../../common/components/SelectInput'
import FetchAndList from '../../common/components/FetchAndList'

//in dev use the mock data
//TODO: prod
if (process.env.NODE_ENV === "development") {
    const { Server } = require("miragejs");
    const { sales, subscriptions } = require("../../mocks");

    new Server({
        routes() {
            this.namespace = process.env.REACT_APP_BASE_URL;
            this.get("sales/", () => sales);
            this.get("subscriptions/", () => subscriptions);
        }
    });
}

const url = process.env.REACT_APP_BASE_URL

//convenience function to turn an array of strings into a drop down list in a select element
const createOptionsList = (arr) => arr.map(v=> {
        return {
            'label': v,
            'value': `${process.env.REACT_APP_BASE_URL}/${v.toLowerCase()}`
        }
    })

//a container to display the FetchAndList and the SelectInput components
//allow a blank line at the top
//doing this here instead of in the SelectInput component because I might not always want a
//blank top line. The app should specify that ...not the universal container
export default function FetcherContainer() {
        const [selectedEndpoint, setSelectedEndpoint] = useState('')
        const optionsForSelect = createOptionsList(['','Sales','Subscriptions'])

    //return the DOM that includes the select element and the list
    //I'd probably factor all of this differently...two different functions
/*
    TODO: using a ternary operator to indicate whether to include the FetchAndList
    as is, this is going to be problematic in the working page because of layout issues
*/
    return (
        <section>
            <div className="field">
                <SelectInput
                    changer = { e => setSelectedEndpoint(e.target.value) }
                    id = 'selectSalesSubs'
                    label = 'Select a variable'
                    options = { optionsForSelect }
                />
            </div>
            {selectedEndpoint.length>5 ? <FetchAndList endpoint = {selectedEndpoint} /> : null}
        </section>
    )
}//FetcherContainer
