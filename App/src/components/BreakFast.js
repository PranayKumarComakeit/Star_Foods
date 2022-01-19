import React from 'react'
import image from './ellipseShape.png';
import centImg from './centImg.jpg'

const BreakFast=()=> {

    return (
        <>
        <div className='container' style={{"height":"110%","display":"flex","position":"fixed"}}>
        <div className="img" style={{"position":"relative","width":"100%"}}>
            <img src={image}  style={{"left":"40%","position":"relative","width":"112%"}} alt="ellipse"/>
        </div>
        <div className="textpart" style={{"display":"content","position":"absolute","marginTop":"30%"}}>
            <h1 style={{"font":"poppins","fontSize":"60px","color":"#FEA150"}}>BREAKFAST</h1>
            <h3 style={{"fontSize":"40px"}}><b>South Indian Brahmin Foods</b></h3>
            <h5 style={{"fontSize":"30px"}}>“Breakfast is everything. The beginning, the first thing.<br/> It is the mouthful which is the commitment to a new day, a continuing life.”</h5>
            <button class="button__primary" style={{"backgroundColor":"#FEA150","opacity":"0.8","marginTop":"12%","padding":"1rem 2rem","fontSize":"120%","textAlign":"center","textTransform":"0.5s","transition":"0.5s","color":"black","borderRadius":"25px "}}><a>Get Started!!</a></button>
        </div> 
        </div>
        </>
    )
}

export default BreakFast;