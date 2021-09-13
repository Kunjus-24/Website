import React from 'react'

 function Card(props) {
     const {title,excerpt,image} = props;
    return (
        <div className="card shadow h-100">
        <img src={image} className="card-img-top "  alt="Project"/>
          <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{excerpt}</p>
              <a href="/" className="stretched-link"></a>
          </div>
      </div>
    )
}
export default Card;