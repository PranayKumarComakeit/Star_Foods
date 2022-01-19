import {AppBar,makeStyles,Toolbar,Typography } from "@material-ui/core";
import { useState } from "react";

  const useStyles = makeStyles((theme) => ({
    icons: {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
      justifyContent:"center",
      marginLeft: theme.spacing(160),
      '&:hover': {
        cursor: 'pointer',
     },
    },
    tokens: {
      marginLeft: theme.spacing(5),
      display: "flex",
      justifyContent:"center",
      '&:hover': {
        cursor: 'pointer',
     },
    },
  }));
  const HomePage=()=>{
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
      <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Star Foods

          </Typography>
          <div className={classes.tokens}>
          <Typography className={classes.tokens}>BreakFast</Typography>
            <Typography className={classes.tokens}>Lunch</Typography>
            <Typography className={classes.tokens}>Dinner</Typography>
          </div>
          <div className={classes.icons}>
            <Typography >Login</Typography>
            <Typography >Sign Up</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <main >
        <section className="hero_container" style={{"margin":"1rem 0","marginTop":"1rem"}}>
          <div className="star_image">
            <img src="https://github.com/PranayKumarComakeit/Star_Foods/blob/main/App/src/HomepageStar.jpg?raw=true" alt="star image" style={{position: 'absolute',
width: '507px',
height: '507px',
left: '709px',
top: '100px'}}/>
          </div>
          <div>
          <p  style={{position:'absolute',
           width:'317px',
           height:'67px',
           left:'60px',
           top:'219px',
           fontFamily:'Poppins',
           fontStyle:'normal',
           fontWeight:'500',
           fontSize:'48px',
           lineHeight:'72px',
           color:'#AF7AC5'
          }}>
            Star Foods
          </p>
          <h1 style={{position:'absolute',
           width:'486.04px',
           height:'28.04px',
           left:'63px',
           top:'312px',
           color:'#333333'
          }}>South Indian Brahmin Foods</h1>
          <h5 style={{position:'absolute',
           width:'489px',
           height:'69px',
           left:'60px',
           top:'354px',
           fontFamily:'Pavanam',
           fontStyle:'normal',
           fontSize:'24px',
           fontWeight:'normal',
           lineHeight:'31px',
           color:'black'
          }}>A healthy home cooked Brahmin Food Served at your door</h5>
          <button  style={
            {"backgroundColor":"#AF7AC5","padding":"0.5rem 1rem","textAlign":"center","textTransform":"0.5s","transition":"0.5s","fontWeight":"600","backgroundSize":"200% auto","color":"white","boxShadow":"0 0 20px #eee","borderRadius":"8px","display":"block",
            position:'absolute',
            width:'163px',
            height:'50px',
            left:'69px',
            top:'606px'
            }}><a>Get Started!!</a></button>
        </div>
        </section>
      </main>
      </>
    );
    };



  export default HomePage;