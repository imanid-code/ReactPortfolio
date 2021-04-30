import React from "react";
import "./card.css"

function PortfolioCard(props){
    return (
      
        <div className="project-card card">
          <div className="img-container">
         <img alt={props.projectname} src={`${process.env.PUBLIC_URL}${props.image}`} />     
              </div> 
              <div className="content">
                  <ul>
                      <li>
                          <strong>Name: </strong> {props.projectname}
                      </li>
                      {/* <li>
                          <strong>Image: </strong> {props.image}
                      </li> */}
                      <li>
                          <strong>Description: </strong> {props.description}
                      </li>
                      <li>
                          <strong><a href= {props.repo}> Github Repository Link: </a>  </strong> 
                      </li>
                      <li>
                          <strong><a href= {props.livedeployment}>LiveDeployment: </a>  </strong> 
                      </li>
                  </ul>
                  </div> 
        </div>
        
    )
}

export default PortfolioCard;