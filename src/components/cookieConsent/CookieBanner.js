import React from "react"
import styled from "styled-components"

const BannerWrap = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  display: ${props => (props.visible ? "flex" : "none")};
  justify-content: center;
  background: var(--radial-gradient-black);
`

const BannerInner = styled.div`
  display: ${props => (props.visible ? "grid" : "none")};
  max-width: 1920px;
  padding: 1rem 0;
  grid-template-columns: 1fr;
  gap: 1rem;
  color: var(--white);

  & p {
    justify-self: center;
    padding: "1rem 0";
  }

  & div {
    width: 100%;
    height: max-content;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 700px) {
    grid-template-columns: 3fr 2fr;
  }
`

const CookieBanner = ({ visible, children, ...props }) => (
  <BannerWrap visible={visible} {...props}>
    <BannerInner visible={visible} {...props}>
      {children}
    </BannerInner>
  </BannerWrap>
)

export default CookieBanner
