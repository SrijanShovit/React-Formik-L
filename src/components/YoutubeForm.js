import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {   
    name:'Srijan',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:'',
    }
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
                <ErrorMessage name="name"
                // to inform it to wrap in a div
                component={TextError}
                />
                </div>

                <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <Field type="email" id="email" name="email" 

                />
                  <ErrorMessage name="email">
                      {ErrorMsg => <div className="error">{ErrorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-control">

                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" 
                />
                 <ErrorMessage name="channel"/>
                </div>

                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field 
                    as="textarea"
                    // component="textarea"
                    id="comments" name="comments"/>
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address" >
                        {/* we pass in an arrow function as children */}
                        {
                            (props)=>{
                                console.log('Render Props',props)
                                const {field,form,meta} = props
                              return  (
                                  <div>
                                    <input type="text" id='address' {...field}/>
                                    {meta.touched && meta.error 
                                    ? <div>{meta.error}</div> 
                                    : null}
                                  </div>
                              )
                            }
                        }
                    </Field>
                </div>

                <div className="form-control">
                    <label htmlFor="facebook">Facebook profile</label>
                    <Field type="text" id="facebook" name='social.facebook'/>
                </div>
                <div className="form-control">
                    <label htmlFor="twitter">Twitter profile</label>
                    <Field type="text" id="twitter" name='social.twitter'/>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

/* 
Any additional props in the field component will be passed through

*/
export default YoutubeForm
