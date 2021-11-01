import TheTeaCozy from "../../media/tea-cozy-website.jpg";
import TheVCExp from "../../media/VC-experience-website.jpg";

import { Component } from "react";
import { LinearProgress } from "@mui/material";

import { projectFirestore } from "../../firebase/config";
import { onSnapshot, collection, query, getDocs } from "firebase/firestore";

class MyWebsites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          skills: "",
          title: "",
          description: "",
          url: "",
        },
      ],
      loading: true,
    };
  }
  componentDidMount = async () => {
    const q = query(collection(projectFirestore, "websiteProjects"));
    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      //const data = querySnapshot.docs.map(doc => doc.data())
      //this.setState({ projects: querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))})
      this.setState({ projects: querySnapshot.docs.map((doc) => doc.data()) });
    });

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
              <h1 class="section__title">Websites</h1>
              {this.createHTML()}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MyWebsites;
