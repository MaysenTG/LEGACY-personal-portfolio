import portrait from '../media/self-portrait.jpeg';
import MyProjects from './my-projects';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  border: none;
  width: inherit;
  text-decoration: none;
`;

function IndexPage() {
  return (
    <Router>
      <main id="index-main">
        <div className="heading-info main-index">
          <div id="main-text">
            <h1>Maysen Greenwood</h1>
            <h3>Fullstack Developer</h3>
            <button id="view-projects"><StyledLink to="/my-projects">View my projects</StyledLink></button>
          </div>
          <img src={portrait} alt="self portrait of Maysen Greenwood" />
        </div>
      </main>
    
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/my-projects">
          <MyProjects />
        </Route>
      </Switch>
    </Router>
  );
}

export default IndexPage;


