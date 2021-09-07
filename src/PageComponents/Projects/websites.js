import TheTeaCozy from '../../media/tea-cozy-website.jpg';
import TheVCExp from '../../media/VC-experience-website.jpg';

function MyWebsites() {
    return (
        <section id="projects">
            <div class="projects__container">
                <div class="row">
                    <h1 class="section__title">Websites</h1>
                    <ul class="project__list">
                        <li class="project">
                            <div class="project__wrapper">
                                <img src={TheVCExp} class="project__img" alt="Car subscription project"/>
                                <div class="project__description">
                                    <h3 class="project__description--title">The VC Experience</h3>
                                    <h4 class="project__description--sub-title">
                                    HTML, CSS
                                    </h4>
                                    <p class="project__description--para">
                                    This is a project from the Full Stack Codeacademy course and is built on HTML and CSS. CSS-Grid positioning was the main focus of this website.
                                    </p>
                                    <div class="project__description--links">
                                    <a href="https://github.com/MaysenTG/TemplateBusinessSite" rel="noreferrer" target="_blank" class="project__description--link">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://maysentg.github.io/TemplateBusinessSite/" rel="noreferrer" target="_blank" class="project__description--link">
                                        <i class="fas fa-web"></i>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="project">
                            <div class="project__wrapper">
                                <img src={TheTeaCozy} class="project__img" alt="Car subscription project"/>
                                <div class="project__description">
                                    <h3 class="project__description--title">The Tea Cozy</h3>
                                    <h4 class="project__description--sub-title">
                                    HTML, CSS
                                    </h4>
                                    <p class="project__description--para">
                                    This is a project from the Full Stack Codeacademy course and is built on HTML and CSS. The main goal of this website was to practise using Flex Box.
                                    </p>
                                    <div class="project__description--links">
                                    <a href="https://github.com/MaysenTG/TheTeaCozy" rel="noreferrer" target="_blank" class="project__description--link">
                                        <i class="fab fa-github-white"></i>
                                    </a>
                                    <a href="https://maysentg.github.io/TheTeaCozy/" rel="noreferrer" target="_blank" class="project__description--link">
                                        <i class="fas fa-web-white"></i>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MyWebsites;