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
  const Navbar=()=>{
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
      <main className="container" style={{"width":"100%","height":"100%","paddingLeft":"100px","marginLeft":"10px","paddingRight":"15px","marginRight":"auto"}}>
        <section className="hero_container" style={{"margin":"1rem 0","marginTop":"1rem"}}>
          <div className="star_image">
            <img style={{"width":"700px","height":"650px","position":"absolute","right":"auto","left":"850px","z-index":"2"}} src="../src/Star.jpg" alt="star image" className="star_pattern"/>
          </div>
          <div class="hero__description" style={{"marginTop":"300px"}}>
          <h1 class="hero__text" style={{"color":"#AF7AC5"}}>
            Star Foods
          </h1>
          <h3>South Indian Brahmin Foods</h3>
          <h5>A healthy home cooked Brahmin Food Served at your door</h5>
          <button class="button__primary" style={{"backgroundColor":"#AF7AC5","marginTop":"300px","padding":"0.5rem 1rem","textAlign":"center","textTransform":"0.5s","transition":"0.5s","fontWeight":"600","backgroundSize":"200% auto","color":"white","boxShadow":"0 0 20px #eee","borderRadius":"8px","display":"block"}}><a>Get Started!!</a></button>
        </div>
        </section>
      </main>
      </>
    );
    };


  
  export default Navbar;