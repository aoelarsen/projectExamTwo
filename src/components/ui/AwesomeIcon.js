import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => {
    if (props.fontSize) return props.fontSize
    return "1.3rem"
  }};
  color: ${props => {
    if (props.color) return props.color
    return "var(--light-bluegreen);"
  }};
  border-radius: 0.3rem;
  justify-self: center;
`

const AwesomeIcon = ({ icon, fontSize, color, ...props }) => {
  return <StyledIcon icon={icon} fontSize={fontSize} color={color} {...props} />
}

export default AwesomeIcon
