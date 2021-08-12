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
    Redirect,
} from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown';

const StyledLink = styled(Link)`
  border: none;
  width: inherit;
  text-decoration: none;
`;

function MainWindow() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <header>
                <ul className="main-navigation">
                    <li><StyledLink to="/home">Home</StyledLink></li>
                    <li><StyledLink to="/my-projects">Projects</StyledLink></li>
                    <li><StyledLink to="/contact-me">Contact</StyledLink></li>
                </ul>
    
                
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Navigation
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={StyledLink} to="/home">Home</Dropdown.Item>
                        <Dropdown.Item as={StyledLink} to="/my-projects">My Projects</Dropdown.Item>
                        <Dropdown.Item as={StyledLink} to="/contact-me">Contact Me</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
            </header>    
            
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route path="/home">
                    <IndexPage />
                </Route>
                <Route path="/my-projects">
                    <MyProjects />
                </Route>
                <Route path="/contact-me">
                    <ContactMe />
                </Route>
            </Switch>
        </Router>
        
    );
}

export default MainWindow;