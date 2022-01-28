import React from 'react'

const Dinner=()=> {

    return (
        <>
        <main>
        <section className='container' style={{"height":"110%","display":"flex","position":"fixed"}}>
        <div className="img" style={{"position":"relative","width":"100%"}}>
            <img src="./images/dinnerEllipse.png"  style={{"color":"#5CAC0E","left":"40%","position":"absolute","width":"112%","color":"green"}} alt="dinner_ellipse"/>
            <img src="./images/dinner1.png" alt="dinner1" style={{"position":"absolute","left":"95%","top":"55%"}} />
            <img src="./images/bfinsideEllipse.png" alt="inside_ellipse" style={{"position":"absolute","left":"76%","top":"26%"}} />
            <img src="./images/dinner2.png" alt="dinner2" style={{"position":"absolute","left":"73%","top":"48%"}} />
            <img src="./images/dinner3.png" alt="dinner3" style={{"position":"absolute","left":"80%","top":"30%"}} />
            <img src="./images/dinner4.png" alt="dinner4" style={{"position":"absolute","left":"100%","top":"22%"}} />
            <img src="./images/dinner5.png" alt="dinner5" style={{"position":"absolute","left":"120%","top":"30%"}} />
            <img src="./images/dinner6.png" alt="dinner6" style={{"position":"absolute","left":"129%","top":"50%"}} />
            <i class="fa-thin fa-circle-arrow-up"></i>
            <img src="./images/DupArrow.png" alt="up_Arrow" style={{"position":"absolute","left":"73%","top":"70%","width":"80px"}} />
            <img src="./images/DdownArrow.png" alt="down_Arrow" style={{"position":"absolute","left":"132%","top":"70%","width":"80px"}} />
        </div>
        <div className="textpart" style={{"display":"content","position":"absolute","marginTop":"30%"}}>
            <h1 style={{"font":"poppins","fontSize":"60px","color":"#F5C529"}}>DINNER</h1>
            <h3 style={{"fontSize":"40px"}}><b>South Indian Brahmin Foods</b></h3>
            <h5 style={{"fontSize":"30px"}}>“The flavors that will inspire you”</h5>
            <button class="button__primary" style={{"backgroundColor":"#F5C529","opacity":"0.9","marginTop":"12%","padding":"1rem 2rem","fontSize":"120%","textAlign":"center","textTransform":"0.5s","transition":"0.5s","color":"black","borderRadius":"25px "}}><a>Get Started!!</a></button>
        </div> 
        </section>
        </main>
        </>
    )
}

export default Dinner;