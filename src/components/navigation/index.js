import React, { useState, useEffect } from "react"
import {
  faHome,
  faEuroSign,
  faUser,
  faPhoneAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import Logo from "../imageFetch/LogoFetch"
import LogoBox from "./LogoBox"
import MainNavWrap from "./MainNavWrap"
import NavElement from "./NavElement"
import NavList from "./NavList"
import NavLink from "./NavLink"
import MenuIcon from "./MenuIcon"

const MainNav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const mobileMenu = () => {
    const mainNav = document.querySelector("mainNavWrap")
    setShowMenu(!showMenu)
    showMenu ? enableBodyScroll(mainNav) : disableBodyScroll(mainNav)
  }

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  })

  return (
    <MainNavWrap className="mainNavWrap">
      <LogoBox>
        <Logo logoBlack />
        <MenuIcon isOpen={showMenu} onClick={() => mobileMenu()} />
      </LogoBox>
      <NavElement className={showMenu ? "showMenu" : ""}>
        <NavList>
          <li>
            <NavLink to="/" icon={faHome}>
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink to="/om-meg" icon={faUser}>
              Om Meg
            </NavLink>
          </li>
          <li>
            <NavLink to="/ta-kontakt" icon={faPhoneAlt}>
              Ta kontakt
            </NavLink>
          </li>
          <li>
            <NavLink to="/priser-og-tjenester" icon={faEuroSign}>
              Priser og tjenester
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallerier" icon={faImages}>
              Gallerier
            </NavLink>
          </li>
        </NavList>
      </NavElement>
    </MainNavWrap>
  )
}

export default MainNav
