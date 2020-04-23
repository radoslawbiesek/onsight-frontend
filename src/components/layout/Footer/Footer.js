import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledFooter = styled('footer')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-height: 115px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.9px;

  & ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    & li {
      margin: 0 25px;
    }
  }

  & p {
    opacity: 0.5;
  }

  & a:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;

    & ul {
      order: -1;
      margin-top: 25px;
    }
    & p {
      text-align: center;
    }
  }
`;

const Footer = () => {
  const navLinks = [
    { label: 'Shop' },
    { label: 'FAQ' },
    { label: 'Contact' },
    { label: 'Blog' },
  ];

  return (
    <StyledFooter>
      <p>
        <a
          rel='noopener noreferrer'
          href='https://github.com/radoslawbiesek'
          target='_blank'
        >
          © 2020 OnSight. All rights reserved.
        </a>
      </p>
      <ul>
        {navLinks.map((link) => (
          <li>
            <NavLink to={link.to ? link.to : '/'}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
