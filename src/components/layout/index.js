import React from "react"
import PropTypes from "prop-types"

import CookieConsent from "../cookieConsent/CookieConsent"
import GlobalStyles from "../../globalstyles/GlobalStyles"
import MainNav from "../navigation"
import Footer from "../footer"
import Heading from "../ui/Heading"
import GridBox from "./GridBox"

const Layout = ({ pageHeading, children }) => {
  return (
    <>
      <GridBox bodyWrap>
        <GlobalStyles />
        <MainNav />
        <GridBox header>
          <Heading center>{pageHeading}</Heading>
        </GridBox>
        <GridBox main>{children}</GridBox>
      </GridBox>
      <Footer />
      <CookieConsent />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageHeading: PropTypes.string.isRequired,
}

export default Layout
