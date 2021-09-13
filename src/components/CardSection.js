import React from 'react'
import Card from './Card';

function CardSection() {
    const projects = [
        {
            title: "THE LEAN APP IS COMING GUIDE!",
            image: "https://cdn.shopify.com/s/files/1/0267/1381/7193/files/11_-_The_App_Is_Coming_-_Square_480x480.jpg?v=1621189026",
            excerpt: "SIGN UP NOW FOR FREE GUIDES...",
        },
        { 
            title: "MY Youtube CHANNEL",
            image: "https://pbs.twimg.com/profile_images/888337424862121984/DTorw5TS_400x400.jpg",
            excerpt: "Over 500 FREE Home Workouts...",
        },
        {
            title: "Get my Cookbook!",
            image: "https://www.leanwithlilly.com/static/cookbooks-dc9ff1f7a20188afb60b13b6266e69d3.jpeg",
            excerpt: "BUY NOW!!",
        },
        {
            title: "SHOP GYMSHARK using my link!",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gymsharkwomen-121234369-2677266559269339-5036545344300294704-n-1605517562.jpg?crop=0.896xw:0.717xh;0.0170xw,0.0231xh&resize=640:*",
            excerpt: "BUY GORGEOUS GYM CLOTHING NOW...",
        },
        { 
            title: "50% OFF my best selling 8 WEEK LEAN TRANSFORMATION GUIDE",
            image: "https://www.leanwithlilly.com/static/LeanBeginnerGuide-bbfe7ecf53e75270aceed78e39750fc7.jpeg",
            excerpt: "BUY NOW!!",
        },
        {
            title: "LEAN RESISTANCE BANDS",
            image: "https://cf.shopee.ph/file/4b0e13e075cdbf2b4d2f16993b79f906",
            excerpt: "GET YOURS NOW!!",
        },
    ];
    return (
        
         <div className="container-fluid text-center my-5 bg-light overflow-hidden ">
        <h1 className="font-weight-light">#LeanWith<span className="text-info">Lilly</span></h1>
        <div className="lead">WE'VE GOT THIS, TOGETHER</div>
        <div className="row my-5 pt-3 d-flex flex-nowrap baba  ">
            {
                projects.map( ( project ) => (
                 <div className="col-12 col-md-4 my-2">
                     <Card
                     title = {project.title}
                     excerpt = {project.excerpt}
                     image = {project.image}
                     />
                     </div>
                ))
            }
          </div>
              
      <div className="my-5">
          <a href="/" className="text-dark text-right">
              <h6>
                  Explore More
                  <i className="fas fa-arrow-right align middle"></i>
              </h6>
              
          </a>
      </div>
    </div>
       
    )
}
export default CardSection;