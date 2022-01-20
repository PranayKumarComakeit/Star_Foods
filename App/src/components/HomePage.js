import {AppBar,makeStyles,Toolbar,Typography } from "@material-ui/core";
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

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
    const pages = ["BreakFast", "Lunch", "Dinner", "Contact Us"];
const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return (
      <>
      <AppBar position="absolute"
        // style={{ background: "transparent", boxShadow: "none", margin:'0' }}
        >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="img" alt="Your logo." src="https://github.com/PranayKumarComakeit/Star_Foods/blob/main/App/src/StarLogo.png?raw=true" />
            <Box style={{ width:'96px', height:'27px', color:'white', fontFamily:'Poppins', fontStyle:'normal', fontWeight:'500', fontSize:'18px', lineHeight:'27px'}}>STARFOODS</Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "2" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 2, display: { xs: "10", md: "flex" } }} justifyContent="space-evenly">
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 1, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
      <main >
        <section className="hero_container" style={{"margin":"1rem 0","marginTop":"1rem"}}>
          <div className="star_image">
            <img src="https://github.com/Aditya-Kamarsu/Star_Foods/blob/main/App/src/HomepgStar.png?raw=true" alt="star image" style={{position: 'absolute',
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
            STAR FOODS
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
            {"backgroundColor":"#AF7AC5","padding":"0.5rem 1rem","textAlign":"center","textTransform":"0.5s","transition":"0.5s","fontWeight":"600","color":"white","borderRadius":"48px",
            position:'absolute',
            width:'163px',
            height:'50px',
            left:'69px',
            top:'606px',
            }}><a href="/login">Getstarted</a></button>
        </div>
        </section>
      </main>
      </>
    );
    };



  export default HomePage;