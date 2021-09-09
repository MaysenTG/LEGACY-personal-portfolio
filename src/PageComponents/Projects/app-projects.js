import CmpdIntrst from '../../media/compound interest app.png';
import LiveWebEditor from '../../media/live-web-code-editor.png';

function MyAppProjects() {
    return (
      <section id="projects">
      <div class="projects__container">
          <div class="row">
              <h1 class="section__title">Web Apps</h1>
              <ul class="project__list">
                  <li class="project">
                      <div class="project__wrapper">
                          <img src={CmpdIntrst} class="project__img" alt="Compound interest web app. Shows graphically the effects of compound growth"/>
                          <div class="project__description">
                              <h3 class="project__description--title">Compound Growth Calculator</h3>
                              <h4 class="project__description--sub-title">NodeJS, ChartJS, HTML, CSS</h4>
                              <p class="project__description--para">
                              This is an app which visually shows the effects of compound growth. Graph using ChartJS.
                              </p>
                              <div class="project__description--links">
                              <a href="https://github.com/MaysenTG/Compound-Growth-JS-App" rel="noreferrer" target="_blank" class="project__description--link">
                                  <i class="icon fa-github-white"></i>
                              </a>
                              <a href="https://maysentg.github.io/Compound-Growth-JS-App/" rel="noreferrer" target="_blank" class="project__description--link">
                                  <i class="icon fa-web-white"></i>
                              </a>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="project">
                      <div class="project__wrapper">
                          <img src={LiveWebEditor} class="project__img" alt="Compound interest web app. Shows graphically the effects of compound growth"/>
                          <div class="project__description">
                              <h3 class="project__description--title">Live Webpage code editor</h3>
                              <h4 class="project__description--sub-title">NodeJS, ReactJS, HTML, CSS, CodeMirror</h4>
                              <p class="project__description--para">
                              This app provides direct feedback to changes in HTML and CSS code by showing a live view of the webpage being edited.
                              </p>
                              <div class="project__description--links">
                              <a href="https://github.com/MaysenTG/live-web-code-editor" rel="noreferrer" target="_blank" class="project__description--link">
                                  <i class="icon fa-github-white"></i>
                              </a>
                              <a href="https://maysentg.github.io/live-web-code-editor/" rel="noreferrer" target="_blank" class="project__description--link">
                                  <i class="icon fa-web-white"></i>
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

export default MyAppProjects;