import SprMktPrice from '../../media/coding-photo-price-finder.webp';
import '../../index';

function MyAutomation() {
  return (
      <section id="projects">
            <div class="projects__container">
                <div class="row">
                    <h1 class="section__title">Automation Programs</h1>
                    <ul class="project__list">
                        <li class="project">
                            <div class="project__wrapper">
                                <img src={SprMktPrice} class="project__img" alt="Supermarket price finder. Python/selenium web scraper for a Online Shopping platform"/>
                                <div class="project__description">
                                    <h3 class="project__description--title">The VC Experience</h3>
                                    <h4 class="project__description--sub-title">Selenium, Python, Apple Script</h4>
                                    <p class="project__description--para">
                                    This project scrapes the Countdown Online Shopping website using the Google Chrome web driver in headless mode. The program finds the price of a mince and cheese pie and returns the price.
                                    If enabled, the program can also send an iMessage to an iPhone user after it finds the price.
                                    </p>
                                    <div class="project__description--links">
                                    <a href="https://github.com/MaysenTG/supermarketProductPriceFinder" rel="noreferrer" target="_blank" class="project__description--link">
                                        <i class="fab fa-github-white"></i>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  );
}

export default MyAutomation;