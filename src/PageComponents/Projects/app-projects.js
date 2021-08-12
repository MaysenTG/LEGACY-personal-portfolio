import CmpdIntrst from '../../media/compound interest app.png';

function MyAppProjects() {
    return (
        <div id="projects-main">
            <h2 className="project-heading apps">Apps</h2>
          <div id="project-4" className="project-container">
            <h3>Financial Compound Interest Calculator</h3>
            <a href="https://maysentg.github.io/Compound-Growth-JS-App/" target="_blank" rel="noreferrer"><img src={CmpdIntrst} className="project-image" alt="supermarket price finder program"/></a>
            <h2>Skills used</h2>
            <ul>
              <li>Javascript (NodeJS, ChartJS)</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
    );
}

export default MyAppProjects;