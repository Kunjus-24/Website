import React from "react";
import lillyLogo from "../assets/lillyLogo.jpg";
function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm  fixed-top " style={{backgroundColor:"CornSilk"}}>
        <div className="container my-2">
         <a href="/" className="navbar-brand text-secondary font-weight-bold fw-bold" > 
         <img src={lillyLogo} alt="photo" className="rounded-circle " style={{width:"50px", height:"50px"}}/>
            <span className="ms-3">Lilly Sabri</span>
         </a> 
         
            <button className="btn btn-outline-info ms-auto fw-bold align-top" >
             Subscribe
            </button>
         
         <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#namma">
          <i className="fas fa-bars"></i>
         </button>
         <div className="navbar-collapse collapse flex-grow-0" id="namma">
             <div className="navbar-nav ">
              <a href="/" className="nav-item nav-link  text-dark font-weight-bold fw-bold  ms-3" > 
                 Merchandise
              </a>
              <a href="/" className="nav-item nav-link text-dark font-weight-bold fw-bold ms-3" >
                  Workout Guides
              </a>
             </div>
         </div>
        </div>
        
       </nav>
      
    );
}
export default Navbar;