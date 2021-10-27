import portrait from '../media/self-portrait.webp';

import React from 'react';
import {
    Link
} from "react-router-dom";
import styled from "styled-components";

import Button from '@mui/material/Button';



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
            <button id="view-projects"><StyledLink to="/my-projects">View my projects</StyledLink></button>
          </div>
          <img src={portrait} alt="self portrait of Maysen Greenwood" />
        </div>
    </main>
  );
}

export default IndexPage;


