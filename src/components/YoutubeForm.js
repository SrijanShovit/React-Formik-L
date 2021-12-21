import React from 'react'
import {Formik,Form} from 'formik'
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

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>  
                {/* Form automatically handles onSubmit for our form */}
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
            </Form>
        </Formik>
    )
}

export default YoutubeForm
