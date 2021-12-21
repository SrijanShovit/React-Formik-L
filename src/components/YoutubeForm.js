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
               {...formikobj.getFieldProps('name')}
                />
                {formikobj.touched.name && formikobj.errors.name ? <div className="error">{formikobj.errors.name}</div> : null}
                </div>

                <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" 
                 {...formikobj.getFieldProps('email')}
                />
                 {formikobj.touched.email && formikobj.errors.email ? <div className="error">{formikobj.errors.email}</div> : null}
                </div>

                <div className="form-control">

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" 
                {...formikobj.getFieldProps('channel')}
                />
                 {formikobj.touched.channel && formikobj.errors.channel ? <div className="error">{formikobj.errors.channel}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
