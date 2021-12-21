import React from 'react'
import {useFormik} from 'formik'

function YoutubeForm() {

    //useFormik hook takes an object as parameter and also returns an object
    const formikobj = useFormik({
        initialValues:{
            //contain intial values for all state variables
            //these property names should be same as the name in label
            name:'Srijan',
            email:'',
            channel:'',
        },
        //accepts values as arguments
        //values is same as that we were referring through formikobj.values
        //this inSubmit will automatically execute whhen submit button in form is pressed
        onSubmit: values => {
            console.log('Form data',values)
        }
    })

    //Formik object will always reflect state of the form
    // console.log('Formik values', formikobj.values)
    return (
        <div>
            <form onSubmit={formikobj.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" 
                onChange={formikobj.handleChange}
                value={formikobj.values.name}
                />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" 
                onChange={formikobj.handleChange}
                value={formikobj.values.email}
                />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" 
                onChange={formikobj.handleChange}
                value={formikobj.values.channel}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
