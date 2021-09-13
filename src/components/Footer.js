import React from "react";
function footer(){
    return(
<footer>
        <div className="container-fluid text-center my-3" style={{backgroundColor: "black"}}>
            <div className="row py-3">
                <div className="col-12">
                    <h2 className="text-light">Interested in Personalised Workout Guides?</h2>
                    <button className="btn btn-outline-light btn-lg mt-2">Register Now</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 text-info py-3">
                    <h5 className="pb-2">More Links</h5>
                    <a href="/" className="text-light d-block">Home</a>
                    <a href="/" className="text-light d-block">Merchandise</a>
                    <a href="/" className="text-light d-block">Personalised Diet Plans</a>
                    <a href="/" className="text-light d-block">
                        Write a Review <i className="fas fa-heart text-light"></i></a>
                </div>
                <div className="col-12 col-md-4 text-light text-justify py-3 " style={{textAlign:" justify"}}>
                I am a Chartered Physiotherapist, APPI Pilates instructor, 
                Fitness, Heath and Lifestyle Influencer and founder of 
                #LeanwithLilly. I do a whole host of things ranging from 
                teaching mass scale (very fun) events to 1:1 tuition and
                physiotherapy. To find out more about what I do and to 
                experience my workout routines and much more, check out my 
                social media links. 
                </div>
                <div className="col-12 col-md-4 py-3">
                    <h5 className="text-info pb-2">Social</h5>
                    <a href="/"><i className="fab fa-instagram text-light h2 d-block"></i></a>
                    <a href="/"><i className="fab fa-facebook-square text-light h2 d-block"></i></a>
                    <a href="/"><i className="fab fa-twitter-square text-light h2 d-block"></i></a>
                    <a href="/"><i className="fab fa-youtube text-light h2 d-block"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 ">
                    Copyright @ Lilly Sabri 2020
                </div>
            </div>
        </div>
    </footer>

    );
}
export default footer;