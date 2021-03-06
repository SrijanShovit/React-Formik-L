import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'
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
    },
    phoneNumbers:['',''],
    phNumbers:['']
}

const savedValues = {   
    name:'Srijan',
    email:'v@example.com',
    channel:'coderdev',
    comments:'welcome to Formik',
    address:'221b Baker Street',
    social:{
        facebook:'',
        twitter:'',
    },
    phoneNumbers:['',''],
    phNumbers:['']
}

const onSubmit = (values,onSubmitProps) => {
    console.log('Form data',values)
    console.log('Submit props',onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email : Yup.string().email("Invalid email format").required("Required"),
    channel : Yup.string().required('Required'),
})

const validationComments = value => {
    let errors = {}
    if (!value){
        errors = 'Required'
    }
    return errors
}

function YoutubeForm() {

    const [formValues, setFormValues] = useState(null)

    return (
        // manually triggering form validation requires entire form to be inside render props
        <Formik 
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize  //determines whether our form can change initial values after it has been initialized once
        // validateOnMount
       
        >{
            formik => {
                console.log('Formik props',formik)
                return (
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
    
                    {/* <div className="form-control">
                        <label htmlFor="comments">Comments</label>
                        <Field 
                        // as="textarea"
                        component="textarea"
                        id="comments" name="comments" 
                        validate={validationComments}
                        />
                        <ErrorMessage name="comments" components={TextError}/>
                    </div> */}
    
                    <div className="form-control">
                        <label htmlFor="address">Address</label>
                        <FastField name="address" >
                            {/* we pass in an arrow function as children */}
                            {
                                (props)=>{
                                    console.log('Field render')
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
                        </FastField>
                    </div>
    
                    <div className="form-control">
                        <label htmlFor="facebook">Facebook profile</label>
                        <Field type="text" id="facebook" name='social.facebook'/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="twitter">Twitter profile</label>
                        <Field type="text" id="twitter" name='social.twitter'/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="primaryPh">Primary phone number</label>
                        <Field type="text" id="primaryPh" name='phoneNumbers[0]'/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="secondaryPh">Secondary phone number</label>
                        <Field type="text" id="secondaryPh" name='phoneNumbers[1]'/>
                    </div>
    
                    <div className="form-control">
                        <label>List of phone numbers</label>
                        <FieldArray name='phNumbers'>
                            {
                                fieldArrayProps => {
                                    // console.log('fieldArrayProps', fieldArrayProps)
                                    const {push,remove,form} = fieldArrayProps
                                    const {values} = form
                                    const {phNumbers} = values
                                    console.log('Form errors', form.errors)
                                    return (<div>{
                                            phNumbers.map((phNumber,index) => (     
                                                   <div key={index}>
                                                    <Field
                                                    name={`phNumbers[${index}]`}
                                                    />
                                                    {index > 0 && (
                                                        <button type="button"
                                                        onClick={()=> remove(index)}
                                                        >-</button>
                                                    )}
                                                    <button type="button"
                                                    onClick={()=> push('')}
                                                    >+</button>
                                                </div>
                                            ))
                                        }
                                    </div>)
                                }
                            }
    
                        </FieldArray>
                    </div>
                    
                    {/* <button type="button"
                    onClick={()=> formik.validateField('comments')}
                    >Validate comments</button>
                    <button type="button"
                    onClick={()=> formik.validateForm()}
                    >Validate all</button>
                    <button type="button"
                    onClick={()=> formik.setFieldTouched('comments')}
                    >Visit comments</button>
                    <button type="button"
                    onClick={()=> formik.setTouched({
                        name:true,
                        email:true,
                        channel:true,
                        comments:true,
                    })}
                    >Visit all</button> */}
                    {/* dirty should be used only if we are sure that user will interact with our app and the submitting values would be diff from initial values */}
                    <button type="button"
                    onClick={() => setFormValues(savedValues)}
                    >Load Saved Data</button>
                    <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                </Form>
                )
            }
        }
           
        </Formik>
    )
}

/* 
ValidationSchema and validate provide validation at top level but we can also have validation on FieldLevel

*/
export default YoutubeForm
