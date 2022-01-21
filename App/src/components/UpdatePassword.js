import React from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
const PasswordUpdate=()=>{

    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        passkey: '',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
        passkey: Yup.string().min(5, "It's too short").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required")
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
                    <h2>Password Updation</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Passkey' name="passkey" placeholder='Enter Your passkey' fullWidth required helperText={<ErrorMessage name="passkey" />}/>
                    <Field as={TextField} fullWidth name='password' type="password" label='New Password' placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                    <Field as={TextField} fullWidth name="confirmPassword" type="password" label='Confirm Password' placeholder="Confirm your password" helperText={<ErrorMessage name="confirmPassword" />} />
                    <br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}><Link to="/login" style={{color:'white'}}>{props.isSubmitting ? "Loading" : "Update Password"}</Link></Button>
                </Form>
                )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default PasswordUpdate