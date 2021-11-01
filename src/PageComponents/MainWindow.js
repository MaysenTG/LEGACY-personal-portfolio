/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import IndexPage from "./IndexPage";
import MyProjects from "./my-projects";
import ContactMe from "./contact-me";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

const StyledLink = styled(Link)`
  border: none;
  width: inherit;
  height: 100%;
  text-decoration: none;
`;

function MainWindow() {
  // eslint-disable-next-line
  const [navName, setNavname] = useState("Navigation");
  return (
    <Router>
      <header>
        <ul className="main-navigation">
          <StyledLink to="/">
            <li>
              <HomeIcon color="white" />
            </li>{" "}
          </StyledLink>
          <StyledLink to="/my-projects">
            <li>Projects</li>
          </StyledLink>
          <StyledLink to="/contact-me">
            <li>Contact</li>
          </StyledLink>
        </ul>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <MenuIcon />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              as={StyledLink}
              to="/"
              onClick={() => setNavname("Home")}
            >
              {" "}
              <HomeIcon color="white" />{" "}
            </Dropdown.Item>
            <Dropdown.Item
              as={StyledLink}
              to="/my-projects"
              onClick={() => setNavname("My Projects")}
            >
              My Projects
            </Dropdown.Item>
            <Dropdown.Item
              as={StyledLink}
              to="/contact-me"
              onClick={() => setNavname("Contact Me")}
            >
              Contact Me
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>

      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/my-projects">
          <MyProjects />
        </Route>
        <Route path="/contact-me">
          <ContactMe />
        </Route>
        <Route
          path="/admin"
          component={() => {
            window.location.href = "https://maysentg.github.io/personal-portfolio-admin/";
            return null;
          }}
        />
        <Route path="*">
          <Redirect from="*" to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainWindow;
