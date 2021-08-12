import TheTeaCozy from '../../media/tea-cozy-website.jpg';
import TheVCExp from '../../media/VC-experience-website.jpg';

function MyWebsites() {
    return (
        <div id="projects-main">
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
        </div>
    )
}

export default MyWebsites;