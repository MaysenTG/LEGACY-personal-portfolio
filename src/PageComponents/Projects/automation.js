import SprMktPrice from '../../media/coding-photo-price-finder.webp';
import '../../index';

function MyAutomation() {
  return (
      <div id="projects-main">
          <h2 className="project-heading automation">Automation Programs</h2>
          <div id="project-3" className="project-container">
            <h3>Supermarket Price Finder</h3>
            <a href="https://github.com/MaysenTG/supermarketProductPriceFinder" target="_blank" rel="noreferrer"><img src={SprMktPrice} className="project-image" alt="supermarket price finder program"/></a>
            <h2>Skills used</h2>
            <ul>
              <li>Python</li>
              <li>Selenium</li>
            </ul>
          </div>
      </div>
  );
}

export default MyAutomation;