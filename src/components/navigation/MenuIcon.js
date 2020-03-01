import React from "react"

import MenuIconWrap, { MenuIconText } from "./MenuIconWrap"

const MenuBars = props => {
  const strokeColor = props.strokeColor || "#275e6a"

  return (
    <svg width="25" height="25">
      <path d="M0,5 25,5" stroke={strokeColor} strokeWidth="2.5" />
      <path d="M0,14 25,14" stroke={strokeColor} strokeWidth="2.5" />
      <path d="M0,23 25,23" stroke={strokeColor} strokeWidth="2.5" />
    </svg>
  )
}

const MenuClose = props => {
  const strokeColor = props.strokeColor || "#275e6a"

  return (
    <svg width="25" height="25">
      <path d="M0,0 25,25" stroke={strokeColor} strokeWidth="2.5" />
      <path d="M0,25 25,0" stroke={strokeColor} strokeWidth="2.5" />
    </svg>
  )
}

const MenuIcon = ({ isOpen, ...props }) => {
  return (
    <MenuIconWrap {...props}>
      {isOpen ? (
        <MenuClose aria-labelledby="menuIconText" />
      ) : (
        <MenuBars aria-labelledby="menuIconText" />
      )}
      <MenuIconText id="menuIconText" isOpen={isOpen}>
        {isOpen ? "Lukk" : "Meny"}
      </MenuIconText>
    </MenuIconWrap>
  )
}

export default MenuIcon
