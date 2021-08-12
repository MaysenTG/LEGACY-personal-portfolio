

import Tabs from 'react-bootstrap/Tabs'
import MyWebsites from './Projects/websites';
import MyAutomation from './Projects/automation';
import MyAppProjects from './Projects/app-projects';

function MyProjects() {
    return (
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
    )
}

export default MyProjects;