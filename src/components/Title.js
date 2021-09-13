import React from "react";
import lilly from "../assets/lilly.jpg";
function Title(){
    return(
        <div className="container my-5 py-5">
        <div className="row text-center align-items-center">
            <div className="col-12 col-md-6 mt-5">
                <img src={lilly} alt="photo" className="img-fluid rounded-circle w-50"/>
            </div>
            <div className="col-12 col-md-6 pt-3" style={{fontSize:"50px"}} >
                Hi, I'm <span className="text-info">Lilly Sabri</span>
                <span className="mt-3"><h5 className=" pt-3" style={{fontWeight: "400"}}>
                    I’m Lilly Sabri, founder of Lean with Lilly.</h5></span>
                    <span><h5 className="fw-bold text-secondary">
                    bio.fm/lillysabri</h5></span>
            </div>
            
        </div>
    </div>
    );
}
export default Title;