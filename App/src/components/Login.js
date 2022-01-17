// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import { useState } from 'react';
// import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
// const Login = () => {

//     const paperStyle = { padding: 20, height: '50vh', width: 500, margin: "100px auto" }
//     const avatarStyle = { backgroundColor: '#1bbd7e' }
//     const btnstyle = { margin: '10px 0' }
//     const initialValues = {
//         email: '',
//         password: '',
//         remember: false
//     }
//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('please enter valid email').required("Required"),
//         password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
//     })

//     const [password, setPassword] = useState("")
//     const [email, setEmail] = useState("")
//     let navigate = useNavigate();
//     const handleEmailFieldChange = (e) => {
//         setEmail(
//             e.target.value
//         )
//     }
//     const handlePasswordFieldChange = (e) => {
//         setPassword(e.target.value);
//     }
//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email: email, password: password })
//         });
//         const json = await response.json()
//         console.log(json.authToken);
//         if (json.success) {
//             // Save the auth token and redirect
//             <Alert></Alert>
//             localStorage.setItem('token', json.authToken);
//             navigate('/userDashBoard');
//         }
//         else {

//             const errorAlert=() => `<Alert severity="error">
//                 <AlertTitle>Error</AlertTitle>
//                 This is an error alert — <strong>check it out!</strong>
//             </Alert>`;
//             errorAlert();
//             console.log(json.errors);
//         }

//     }
//     // const onSubmit = (values, props) => {
//     //     console.log(values)
//     //     setTimeout(() => {
//     //         props.resetForm()
//     //         props.setSubmitting(false)
//     //     }, 2000)

//     // }

//     return (

//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
//                     {(props) => (
//                         <Form>
//                             <Field as={TextField} label='Email' name="email" placeholder='Enter Your Email' onChange={handleEmailFieldChange} value={email} fullWidth required helperText={<ErrorMessage name="email" />} />
//                             <Field as={TextField} fullWidth name='password' type="password" label='Password' onChange={handlePasswordFieldChange} value={password} placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
//                             <Field as={FormControlLabel} name='remember'
//                                 control={
//                                     <Checkbox color="primary" />
//                                 }
//                                 label="Remember me"
//                             /><br /><br />

//                             <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={onSubmit} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
//                         </Form>
//                     )}
//                 </Formik>
//                 <Typography >
//                     <Link href="#" >Forgot password ?</Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                     <Link href="#" >Sign Up </Link>
//                 </Typography>
//             </Paper>
//         </Grid>
//     )
// }

// export default Login

import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Login=()=>{
    // eslint-disable-next-line
    const paperStyle={padding :20,height:'50vh',width:500, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    const initialValues = {
        email: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
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
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                <Form>
                    <Field as={TextField} label='Email' name="email" placeholder='Enter Your Email' fullWidth required helperText={<ErrorMessage name="email" />}/>
                    <Field as={TextField} fullWidth name='password' type="password" label='Password' placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                    <Field as={FormControlLabel} name='remember'
                        control={
                            <Checkbox color="primary"/>
                                }
                                label="Remember me"
                            /><br /><br />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                </Form>
                )}
                </Formik>
                <Typography >
                    <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >Sign Up </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login