import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPassword=()=>{

    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return(

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Forgot Password</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Email' name="email" placeholder='Enter Your Email' fullWidth required helperText={<ErrorMessage name="email" />}/>
                    <br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}><Link to="/updatepassword" style={{color:'white'}}>{props.isSubmitting ? "Loading" : "Get passkey"}</Link></Button>
                </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default ForgotPassword