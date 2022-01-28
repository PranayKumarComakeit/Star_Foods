import React from 'react'

const Lunch=()=> {

    return (
        <>
        <main>
        <section className='container' style={{"height":"110%","display":"flex","position":"fixed"}}>
        <div className="img" style={{"position":"relative","width":"100%"}}>
            <img src="./images/lunchEllipse.png"  style={{"color":"#5CAC0E","left":"40%","position":"absolute","width":"112%","color":"green"}} alt="outer_ellipse"/>
            <img src="./images/lunchmain.png" alt="center_image" style={{"position":"absolute","left":"95%","top":"55%"}} />
            <img src="./images/bfinsideEllipse.png" alt="inside_ellipse" style={{"position":"absolute","left":"76%","top":"26%"}} />
            <img src="./images/tomatopappu.png" alt="tomatopappu" style={{"position":"absolute","left":"73%","top":"48%"}} />
            <img src="./images/curry2.png" alt="curry2" style={{"position":"absolute","left":"80%","top":"30%"}} />
            <img src="./images/curd.png" alt="curd" style={{"position":"absolute","left":"100%","top":"22%"}} />
            <img src="./images/papad.png" alt="papad" style={{"position":"absolute","left":"120%","top":"30%"}} />
            <img src="./images/aloo.png" alt="aloo" style={{"position":"absolute","left":"129%","top":"50%"}} />
            <i class="fa-thin fa-circle-arrow-up"></i>
            <img src="./images/LupArrow.png" alt="up_Arrow" style={{"position":"absolute","left":"73%","top":"70%","width":"80px"}} />
            <img src="./images/LdownArrow.png" alt="down_Arrow" style={{"position":"absolute","left":"132%","top":"70%","width":"80px"}} />
        </div>
        <div className="textpart" style={{"display":"content","position":"absolute","marginTop":"30%"}}>
            <h1 style={{"font":"poppins","fontSize":"60px","color":"#5CAC0E"}}>LUNCH</h1>
            <h3 style={{"fontSize":"40px"}}><b>South Indian Brahmin Foods</b></h3>
            <h5 style={{"fontSize":"30px"}}>“One cannot think well, love well, sleep well,<br/> if one has not dined well.”</h5>
            <button class="button__primary" style={{"backgroundColor":"#5CAC0E","opacity":"0.9","marginTop":"12%","padding":"1rem 2rem","fontSize":"120%","textAlign":"center","textTransform":"0.5s","transition":"0.5s","color":"black","borderRadius":"25px "}}><a>Get Started!!</a></button>
        </div> 
        </section>
        </main>
        </>
    )
}

export default Lunch;