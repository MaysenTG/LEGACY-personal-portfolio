import TheTeaCozy from '../media/tea-cozy-website.jpg';
import TheVCExp from '../media/VC-experience-website.jpg'

function MyProjects() {
    return (
        <main id="projects-main">
          <h1>My Projects</h1>
          <h2 className="project-heading">Websites</h2>
          <div id="project-1" className="project-container">
            <h3>The Tea Cozy Website</h3>
            <a href="https://maysentg.github.io/TheTeaCozy/" target="_blank" rel="noreferrer"><img src={TheTeaCozy} className="project-image" alt="tea cozy website"/></a>
            <h2>Skills used</h2>
            <ul>
              <li>CSS - flex boxes</li>
              <li>HTML</li>
            </ul>
          </div>
          <div id="project-2" className="project-container">
            <h3>The VC Experience</h3>
            <a href="https://maysentg.github.io/TemplateBusinessSite/" target="_blank" rel="noreferrer"><img src={TheVCExp} className="project-image" alt="vc experience project"/></a>
            <h2>Skills used</h2>
            <ul>
              <li>CSS - Grid positioning</li>
              <li>HTML</li>
            </ul>
          </div>
          <h2 className="project-heading automation">Automation Programs</h2>
          <div id="project-3" className="project-container">
            <h3>Supermarket Price Finder</h3>
            <a href="https://github.com/MaysenTG/supermarketProductPriceFinder" target="_blank" rel="noreferrer"><img src="media/coding-photo-price-finder.webp" className="project-image" alt="supermarket price finder program"/></a>
            <h2>Skills used</h2>
            <ul>
              <li>Python</li>
              <li>Selenium</li>
            </ul>
          </div>
        </main>
    )
}

export default MyProjects;