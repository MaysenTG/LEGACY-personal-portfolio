import portrait from "../media/self-portrait.webp";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  border: none;
  width: inherit;
  text-decoration: none;
`;

function IndexPage() {
  return (
    <main id="index-main">
      <div className="heading-info main-index">
        <div id="main-text">
          <h1>Maysen Greenwood</h1>
          <h3>Fullstack Developer</h3>
          <StyledLink to="/my-projects">
            <button id="view-projects">View my projects</button>
          </StyledLink>
        </div>
        <img src={portrait} alt="self portrait of Maysen Greenwood" />
      </div>
    </main>
  );
}

export default IndexPage;
