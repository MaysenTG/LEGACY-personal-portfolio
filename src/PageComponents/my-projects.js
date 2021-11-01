import { projectFirestore } from "../firebase/config";
import { onSnapshot, collection, query, getDocs } from "firebase/firestore";

import Tabs from "react-bootstrap/Tabs";
import MyWebsites from "./Projects/websites";
import MyAutomation from "./Projects/automation";
import MyAppProjects from "./Projects/app-projects";

import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars";
import { Component } from "react";

class MyProjects extends Component {
  render() {
    return (
      <Tabs fill defaultActiveKey="apps" id="projects-tab" className="mb-3">
        <Tabs.Tab eventKey="apps" title="Apps">
          <MyAppProjects />
        </Tabs.Tab>
        <Tabs.Tab eventKey="websites" title="Websites">
          <MyWebsites />
        </Tabs.Tab>
        <Tabs.Tab eventKey="automation" title="Automation">
          <MyAutomation />
        </Tabs.Tab>
      </Tabs>
    );
  }
}

export default MyProjects;
