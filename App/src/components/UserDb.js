import React from 'react'
//import  ReactDOM  from 'react-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
//import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/';

const UserDb = () => {
    const useStyles = makeStyles({
        btn: {
            height: "200",
            position: 'relative',
            top: "100%",
    
        },
    })
    const classes = useStyles();
    return (
        <div>
            <div>
            <Typography variant="h2" component="h6" gutterBottom>
                Categories
            </Typography>


            </div>
            <div class="flex-container" style={{ display: "flex" }}>
                {/* <div class="flex-child-orange">
                    <h2 style={{color:"white",padding:"70px"}}>Breakfast</h2>
                </div> */}
                <Typography class="flex-child-orange">
                <h2 style={{color:"white",padding:"70px"}}>Breakfast</h2>
                </Typography>
                
                <Typography class="flex-child-green">
                    <h2 style={{color:"white",padding:"70px"}}>Lunch</h2>
                </Typography>

                <Typography class="flex-child-yellow">
                    <h2 style={{color:"white",padding:"70px"}}>Dinner</h2>
                </Typography>
                </div>
            <div className='container'>
                <div className='vertical-center'>
                    <Button 
                    className={classes.btn}
                    variant="contained" 
                    disableElevation 
                    endIcon={<DeliveryDiningIcon fontSize='large'/>} 
                    color="primary">Order Now</Button>
                </div>
            </div>
        </div>
    )
}

export default UserDb
