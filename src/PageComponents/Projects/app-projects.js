import { React, Component } from "react";

import { LinearProgress } from "@mui/material";

import { projectFirestore } from "../../firebase/config";
import { onSnapshot, collection, query, getDocs } from "firebase/firestore";

class MyAppProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
      progress: 0,
    };
  }
  componentDidMount = async () => {
    const q = query(collection(projectFirestore, "appProject"));
    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      // doc.data() is never undefined for query doc snapshots
      this.setState({ projects: querySnapshot.docs.map((doc) => doc.data()) });
    });

    this.createHTML();

    this.setState({ loading: false });
  };

  createHTML() {
    const appProjects = this.state.projects;

    return (
      <ul class="project__list">
        {appProjects.map((d) => {
          return (
            <li key={d.id} class="project">
              <div class="project__wrapper">
                <img
                  src={d.url}
                  class="project__img"
                  alt="Car subscription project"
                />
                <div class="project__description">
                  <h3 class="project__description--title">{d.title}</h3>
                  <h4 class="project__description--sub-title">{d.skills}</h4>
                  <p class="project__description--para">{d.description}</p>
                  <div class="project__description--links">
                    <a
                      href={d.githubRepo}
                      rel="noreferrer"
                      target="_blank"
                      class="project__description--link"
                    >
                      <i class="icon fa-github-white"></i>
                    </a>

                    {d.livePreview && (
                      <a
                        href={d.livePreview}
                        rel="noreferrer"
                        target="_blank"
                        class="project__description--link"
                      >
                        <i class="icon fa-web-white"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <h1>Loading projects</h1>
          <LinearProgress />
        </div>
      );
    } else {
      return (
        <section id="projects">
          <div class="projects__container">
            <div class="row">
              <h1 class="section__title">Web Apps</h1>
              {this.createHTML()}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MyAppProjects;

/*




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
                            <li class="project">
                                <div class="project__wrapper">
                                    <img src={TodoApp} class="project__img" alt="Compound interest web app. Shows graphically the effects of compound growth"/>
                                    <div class="project__description">
                                        <h3 class="project__description--title">Todo App using a Firebase DB</h3>
                                        <h4 class="project__description--sub-title">NodeJS, ReactJS, HTML, CSS, Firebase</h4>
                                        <p class="project__description--para">
                                            This app implements a to do app in ReactJS utilizing CRUD on a Firebase DB
                                        </p>
                                        <div class="project__description--links">
                                        <a href="https://github.com/MaysenTG/react-todo-app" rel="noreferrer" target="_blank" class="project__description--link">
                                            <i class="icon fa-github-white"></i>
                                        </a>
                                        <a href="https://maysentg.github.io/react-todo-app/" rel="noreferrer" target="_blank" class="project__description--link">
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






class ViewProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            projects: [{
                "skills": "ReactJS, More ReactJS",
                "title": "Another test",
                "description": "Another app here",
                "url": "https://firebasestorage.googleapis.com/v0/b/personal-project-projects.appspot.com/o/self-portrait.jpg?alt=media&token=3fd2c9ff-1ea9-4435-8b8f-9a4e020373d2"
            }],
            loading: true
        }
    }
    componentDidMount = async () => { 
        const q = query(collection(projectFirestore, "appProject"));
        const querySnapshot = await getDocs(q);
        
        onSnapshot(q, (querySnapshot) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            //const data = querySnapshot.docs.map(doc => doc.data())
            //this.setState({ projects: querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))})
            this.setState({ projects: querySnapshot.docs.map((doc) => doc.data())})
        });
        
        this.setState({ loading: false })
    }
    
    render() {
        if(this.state.loading) {
            return <>
                    <h1>Loading data</h1>
                    <LinearProgress />
                   </>
        }
        else {
            return (
                <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xl">
                    <Typography component="h1" variant="h5">
                        View all projects
                    </Typography>
                    <div className="main">
                        <section id="projects">
                            <div class="projects__container">
                                <div class="row">
                                    <ul class="project__list">
                                    {this.state.projects
                                    .map(d => {
                                        return <li class="project">
                                            <div class="project__wrapper">
                                                <img src={d.url} class="project__img" alt="Car subscription project"/>
                                                <div class="project__description">
                                                    <h3 class="project__description--title">{d.title}</h3>
                                                    <h4 class="project__description--sub-title">
                                                    {d.skills}
                                                    </h4>
                                                    <p class="project__description--para">
                                                        {d.description}
                                                    </p>
                                                    <div class="project__description--links">
                                                        <a href={d.githubRepo} rel="noreferrer" target="_blank" class="project__description--link">
                                                            <i class="icon fa-github-white"></i>
                                                        </a>
                                                        
                                                        {d.livePreview &&
                                                            <a href={d.livePreview} rel="noreferrer" target="_blank" class="project__description--link">
                                                            <i class="icon fa-web-white"></i>
                                                            </a>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>                
                </Container>
                </ThemeProvider>
        )
    }
    }
}
//return <div style={{"display": "inline-flex"}}><p>{d.title}</p><img src={d.url} height="200" width="auto"/></div>
//return <li key={d.title} className="bg-light list-group-item d-flex justify-content-between">Title: {d.title}</li>

export default ViewProjects
*/
