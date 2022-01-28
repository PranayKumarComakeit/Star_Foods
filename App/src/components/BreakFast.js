import React from 'react'

const BreakFast=()=> {

    return (
        <>
        <main>
        <section className='container' style={{"height":"110%","display":"flex","position":"fixed"}}>
        <div className="img" style={{"position":"relative","width":"100%"}}>
            <img src="./images/bfellipseShape.png"  style={{"left":"40%","position":"absolute","width":"112%"}} alt="outer_ellipse"/>
            <img src="./images/bfcentImg.png" alt="center_image" style={{"position":"absolute","left":"95%","top":"55%"}} />
            <img src="./images/bfinsideEllipse.png" alt="inside_ellipse" style={{"position":"absolute","left":"76%","top":"26%"}} />
            <img src="./images/bfimage1.png" alt="image1" style={{"position":"absolute","left":"73%","top":"50%"}} />
            <img src="./images/bfimage2.png" alt="image2" style={{"position":"absolute","left":"82%","top":"30%"}} />
            <img src="./images/bfimage5.png" alt="image5" style={{"position":"absolute","left":"100%","top":"22%"}} />
            <img src="./images/bfimage6.png" alt="image6" style={{"position":"absolute","left":"120%","top":"30%"}} />
            <img src="./images/bfimage9.png" alt="image9" style={{"position":"absolute","left":"129%","top":"50%"}} />
            <img src="./images/bfupArrow.png" alt="up_Arrow" style={{"position":"absolute","left":"73%","top":"70%","width":"80px"}} />
            <img src="./images/bfdownArrow.png" alt="down_Arrow"  style={{"position":"absolute","left":"132%","top":"70%","width":"80px"}} />
        </div>
        <div className="textpart" style={{"display":"content","position":"absolute","marginTop":"30%"}}>
            <h1 style={{"font":"poppins","fontSize":"60px","color":"#FEA150"}}>BREAKFAST</h1>
            <h3 style={{"fontSize":"40px"}}><b>South Indian Brahmin Foods</b></h3>
            <h5 style={{"fontSize":"30px"}}>“Breakfast is everything. The beginning, the first thing.<br/> It is the mouthful which is the commitment to a new day, a continuing life.”</h5>
            <button class="button__primary" style={{"backgroundColor":"#FEA150","opacity":"0.8","marginTop":"12%","padding":"1rem 2rem","fontSize":"120%","textAlign":"center","textTransform":"0.5s","transition":"0.5s","color":"black","borderRadius":"25px "}}><a>Get Started!!</a></button>
        </div> 
        </section>
        </main>
        </>
    )
}

export default BreakFast;