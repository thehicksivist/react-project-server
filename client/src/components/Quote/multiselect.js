import React from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'

export const renderMultiselect = ({ input, data, valueField, textField }) =>
    <Multiselect {...input}
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={data}
        valueField={valueField}
        textField={textField}
    />

export default renderMultiselect;