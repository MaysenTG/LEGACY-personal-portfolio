/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from "styled-components";
import IndexPage from './IndexPage';
import MyProjects from './my-projects';
import ContactMe from './contact-me';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const StyledLink = styled(Link)`
  border: none;
  width: inherit;
  text-decoration: none;
`;

function MainWindow() {
        return (
            <Router>
            <header>
                <ul class="main-navigation">
                    <li><StyledLink to={process.env.PUBLIC_URL+"/home"}>Home</StyledLink></li>
                    <li><StyledLink to={process.env.PUBLIC_URL+"/my-projects"}>Projects</StyledLink></li>
                    <li><StyledLink to={process.env.PUBLIC_URL+"/contact-me"}>Contact</StyledLink></li>
                </ul>
    
                <div class="dropdown">
                    <button class="dropbtn">Navigation</button>
                    <div class="dropdown-content">
                        <a><StyledLink to={process.env.PUBLIC_URL+"/home"}>Home</StyledLink></a>
                        <a><StyledLink to={process.env.PUBLIC_URL+"/my-projects"}>My Projects</StyledLink></a>
                        <a><StyledLink to={process.env.PUBLIC_URL+"/contact-me"}>Contact</StyledLink></a>
                    </div>
                </div>
            </header>    
            
            <Switch>
                <Route exact path={process.env.PUBLIC_URL+"/"}>
                    <Redirect to={process.env.PUBLIC_URL+"/home"}/>
                </Route>
                <Route path={process.env.PUBLIC_URL+"/home"}>
                    <IndexPage />
                </Route>
                <Route path={process.env.PUBLIC_URL+"/my-projects"}>
                    <MyProjects />
                </Route>
                <Route path={process.env.PUBLIC_URL+"/contact-me"}>
                    <ContactMe />
                </Route>
            </Switch>
        </Router>
        
    );
}

export default MainWindow;