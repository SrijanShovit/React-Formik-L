import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const initialValues = {   
    name:'Srijan',
    email:'',
    channel:''
}

const onSubmit = values => {
    console.log('Form data',values)
}

const validate= values=> {
    //Imp points about validate
    //1.should return an object
    //2.Properties of this object should be same as properties of values
    //3.Values for these keys should be string indicating error messages for these keys

    let errors = {}

    if(!values.name){
        errors.name = 'Required'
    }

    if (!values.email){
        errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }

    if (!values.channel){
        errors.channel = 'Required'
    }
    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email : Yup.string().email("Invalid email format").required("Required"),
    channel : Yup.string().required('Required'),
})

function YoutubeForm() {

   
    const formikobj = useFormik({
        initialValues,        
        onSubmit,
        // validate 
        validationSchema
    })

    console.log('Form errors',formikobj.errors)
    console.log('Visited fields',formikobj.touched)
    
    return (
        <div>
            <form onSubmit={formikobj.handleSubmit}>
                <div className="form-control">

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                onChange={formikobj.handleChange}
                onBlur={formikobj.handleBlur} 
                value={formikobj.values.name}
                />
                {formikobj.touched.name && formikobj.errors.name ? <div className="error">{formikobj.errors.name}</div> : null}
                </div>

                <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" 
                onChange={formikobj.handleChange}
                onBlur={formikobj.handleBlur}  //keep track of visited fields
                value={formikobj.values.email}
                />
                 {formikobj.touched.email && formikobj.errors.email ? <div className="error">{formikobj.errors.email}</div> : null}
                </div>

                <div className="form-control">

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" 
                onChange={formikobj.handleChange}
                onBlur={formikobj.handleBlur} 
                value={formikobj.values.channel}
                />
                 {formikobj.touched.channel && formikobj.errors.channel ? <div className="error">{formikobj.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
