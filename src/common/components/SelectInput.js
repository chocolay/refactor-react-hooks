import React from 'react'
import PropTypes from 'prop-types'



//create a component for a select element
export default function SelectInput({ changer, id, label, options }) {
    return (
        <>
            <label htmlFor = { id }>{ label }</label>
            <select id = { id } onChange={changer}>
                {options.map(opt => (
                    <option key={ opt.value } value = { opt.value }>
                        { opt.label }
                    </option>
                ))}
            </select>
        </>
    )
}

//verify that the props input into the component are the proper type and
// that their data structure is proper
SelectInput.propTypes = {
    changer: PropTypes.func.isRequired,
    id:      PropTypes.string.isRequired,
    label:   PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string.isRequired,
                    label: PropTypes.string.isRequired
                })
    ).isRequired
}
