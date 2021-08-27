

import Tabs from 'react-bootstrap/Tabs'
import MyWebsites from './Projects/websites';
import MyAutomation from './Projects/automation';
import MyAppProjects from './Projects/app-projects';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';


function MyProjects() {
    return (
      <OverlayScrollbarsComponent>
          <Tabs fill defaultActiveKey="websites" id="projects-tab" className="mb-3">
            <Tabs.Tab eventKey="websites" title="Websites">
              <MyWebsites />
            </Tabs.Tab>
            <Tabs.Tab eventKey="automation" title="Automation">
              <MyAutomation />
            </Tabs.Tab>
            <Tabs.Tab eventKey="apps" title="Apps">
              <MyAppProjects />
            </Tabs.Tab>
          </Tabs>
      </OverlayScrollbarsComponent>
    )
}

export default MyProjects;