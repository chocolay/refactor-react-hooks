import React, { useState } from "react"
import Aside from "../../common/components/Aside"
import ChartContainer from "./ChartContainer"
import Layout from "../../common/components/Layout"
import Main from "../../common/components/Main"
import SelectInput from "../../common/components/SelectInput"
import SummaryContainer from "./SummaryContainer"

export default function DashboardShell() {
    const [selectedLabel, setSelectedLabel] = useState("")

    /*
    TODO: refactor in the next milestone
    componentDidMount() {
      this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`)
    }
   */

    const handleSelectChange = event => {
        const selectedLabel = event.target.selectedOptions[0].label
        setSelectedLabel(selectedLabel)
        /*
        TODO: refactor in the next milestone
        this.props.fetchDataset(event.target.value)
        */
    }

    const url = process.env.REACT_APP_BASE_URL

//convenience function to turn an array of strings into a drop down list in a select element
    const createOptionsList = (arr) => arr.map(v=> {
        return {
            'label': v,
            'value': `${url}/${v.toLowerCase()}`
        }
    })

    const optionsForSelect = createOptionsList(['Sales','Subscriptions'])
    optionsForSelect.unshift({label:"",value:""})

    return (
        <Layout>
            <Aside>
                <h2># Polly dashboard</h2>
                <SelectInput
                    changer={ handleSelectChange }
                    id="select-chart"
                    label="Please select a chart"
                    options={optionsForSelect}
                />
            </Aside>
            <Main>
                <h1>
                    Welcome, <span className="bold">learner!</span>
                </h1>
                <SummaryContainer />
                <ChartContainer selectedLabel={selectedLabel} />
            </Main>
        </Layout>
    )
}
