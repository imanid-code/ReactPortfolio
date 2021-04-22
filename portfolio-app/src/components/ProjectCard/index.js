import React from "react";

function PortfolioCard(props){
    return (
        <div className="card">
          <div className="img-container">
         <img alt={props.projectname} src={props.image} />     
              </div> 
              <div className="content">
                  <ul>
                      <li>
                          <strong>Name: </strong> {props.projectname}
                      </li>
                      <li>
                          <strong>Image: </strong> {props.image}
                      </li>
                      <li>
                          <strong>Description: </strong> {props.description}
                      </li>
                      <li>
                          <strong>Repository: </strong> {props.repo}
                      </li>
                      <li>
                          <strong>LiveDeployment: </strong> {props.livedeployment}
                      </li>
                  </ul>
                  </div> 
        </div>
    )
}

export default PortfolioCard;