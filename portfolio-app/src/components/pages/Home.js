
import React , {useState} from 'react'
import ProjectCard from "../ProjectCard"
import portfolio from "../../portfolio.json"


const Home = () => {
    const [portfolioData, setPortfolioData] = useState(portfolio)
    return (
        <>
        {
            portfolioData.map(({id, projectname, image, description, repo, livedeployment}) => {
                return (<ProjectCard 
                id={id}
                projectname={projectname}
                image={image}
                description={description}
                repo={repo}
                livedeployment={livedeployment}
                
                />)
            })
        }</>
    )
}
export default Home;