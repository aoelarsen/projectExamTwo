import React, { useState, useEffect } from "react"
import Cookies from "js-cookie"

import CookieBanner from "./CookieBanner"

import Anchor from "../ui/Anchor"
import Button from "../ui/Button"

const CookieConsent = () => {
  const [visibleBanner, setVisibleBanner] = useState(false)
  const cookieName = "gatsby-gdpr-google-analytics"

  useEffect(() => {
    if (Cookies.get(cookieName) === undefined || null) {
      setVisibleBanner(true)
    }
  }, [])

  const userConsent = async value => {
    await Cookies.set(cookieName, value, { expires: 365 })
    setVisibleBanner(false)
  }

  return (
    <CookieBanner visible={visibleBanner}>
      <p>
        Denne siden bruker informasjonskapsler (cookies) for å forbedre
        brukeropplevelsen. Les mer i{" "}
        <Anchor href="/personvern" inline invert>
          personvernerklæringen
        </Anchor>
        .
      </p>
      <div>
        <Button center onClick={() => userConsent(true)}>
          Det er greit
        </Button>
        <Button center secondary onClick={() => userConsent(false)}>
          Nei takk
        </Button>
      </div>
    </CookieBanner>
  )
}

export default CookieConsent
