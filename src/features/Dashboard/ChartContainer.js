import React, { useContext } from "react"
import LineChart from "./LineChart"
import { globalContext } from "../../App"
import PropTypes from "prop-types"


export default function ChartContainer({ selectedLabel }) {
    //this gives the state
    const { data: dataset } = useContext(globalContext)

    const chartLabels = dataset.map(dataPoint => dataPoint.timestamp)
    const chartValues = dataset.map(dataPoint => dataPoint.amount)

  return (
    <div>
      <LineChart
        chartLabels={ chartLabels }
        chartValues={ chartValues }
        label={ selectedLabel }
      />
    </div>
  )
}//ChartContainer


ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
}


