import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
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
                <Field type="text" id="name" name="name" 
                />
                <ErrorMessage name="name"/>
                </div>

                <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <Field type="email" id="email" name="email" 
                />
                  <ErrorMessage name="email"/>
                </div>

                <div className="form-control">

                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" 
                />
                 <ErrorMessage name="channel"/>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

/* 
Field does 3 things behind the scene
1.Hook up input to top level form component
2.Uses name attribute to match up form state
3.Field will render an input element

ErrorMessage will do exactly what we did manually for error handling
*/
export default YoutubeForm
