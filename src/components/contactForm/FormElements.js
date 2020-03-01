import styled, { css } from "styled-components"

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center center;
  gap: 1rem;
`

export const FormGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  place-items: ${props =>
    props.placeItems ? props.placeItems : "center start"};
`

export const FormLabel = styled.label`
  width: 100%;
  padding: 0.3rem 0;
  font-weight: 600;
`

const inputStyling = css`
  width: 100%;
  padding: 1rem;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  &::placeholder {
    color: var(--bluegreen);
    opacity: 0.7;
  }
  &:focus {
    outline: 2px solid var(--bluegreen);
    border-radius: var(--border-radius);
  }
`

export const FormInput = styled.input`
  ${inputStyling}
`

export const TextArea = styled.textarea`
  ${inputStyling}
  line-height: 120%;
  resize: vertical;
`

export const ErrorMessage = styled.span`
  padding: 0.3rem 0;
  color: darkred;
  font-size: 0.9rem;
`

export const SubmittBtn = styled.input``
