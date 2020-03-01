import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { NavLinkLabel, LinkLabelBox } from "./NavLinkLabel"

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.7rem 0.2rem;
  color: var(--black);
  font-size: 1.1rem;
  text-transform: uppercase;
  border: "1px solid transparent";
  border-radius: var(--border-radius);
  &:hover {
    background: var(--gray);
    color: var(--white);
    text-decoration: none;
  }
  &:active {
    background: var(--bluegreen);
  }

  &[aria-current="page"] {
    border-left: 2px solid var(--bluegreen);
    box-shadow: 2px 0px 14px -10px var(--light-bluegreen);
  }

  opacity: 1;
  transition: opacity 1000ms ease-in-out;
`

const NavIcon = styled(FontAwesomeIcon)`
  font-size: 1.3rem;
  border-radius: var(--border-radius);
  color: var(--light-bluegreen);
  justify-self: center;
  ${StyledLink}:hover & {
    color: var(--white);
  }

  display: ${props => {
    if (props.className === "galleryLink") return "none"
    return "inline-block"
  }};

  @media screen and (min-width: 960px) {
    display: inline-block;
  }
`

const NavLink = ({ to, icon, children, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      <LinkLabelBox {...props}>
        <NavIcon icon={icon} {...props} />
        <NavLinkLabel {...props}>{children}</NavLinkLabel>
      </LinkLabelBox>
    </StyledLink>
  )
}

export default NavLink
