import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

function CheckboxGroup(props) {
    //we need to use renderProps pattern for radio buttons
    const {label,name,options,...rest} = props
    return (
        <div classname="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        // the field property has name in it but it also takes care of onChange and onBlur event
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked = {field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
            
        </div>
    )
}

export default CheckboxGroup
