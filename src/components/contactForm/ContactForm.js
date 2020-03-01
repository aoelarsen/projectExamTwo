import React, { useState } from "react"
// import { navigate } from "gatsby-link"
import { useForm } from "react-hook-form"

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  TextArea,
  ErrorMessage,
} from "./FormElements"
import Button, { Submit } from "../ui/Button"
import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const {
    register,
    handleSubmit,
    setError,
    reset,
    errors,
    formState: { isSubmitting },
  } = useForm()

  const handleChange = e => {
    setCustomerName(e.target.value)
  }

  const onSubmit = async (data, e) => {
    console.log(data)
    e.preventDefault()
    const form = e.target
    try {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data,
        }),
      }).catch(error => alert(error))

      console.log(customerName)
      setSubmitted(true)
      reset()
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      )
    }
  }

  if (submitted)
    return (
      <GridBox linearGreen>
        <Button
          secondary
          close
          onClick={() => {
            setSubmitted(false)
            setCustomerName("")
          }}
        >
          &nbsp;&#10006;&nbsp;
        </Button>
        <GridBox padding="0 2rem 2rem 2rem">
          <Heading h2 center invert>
            Så hyggelig, {customerName}!
          </Heading>
          <p>Takk for at du tar kontakt.</p>
          <p style={{ maxWidth: "350px" }}>
            Så fort jeg har mottatt og lest meldingen din, skal jeg svarer deg
            etter beste evne.
          </p>
          <Heading h3 invert center>
            Vi snakkes!
          </Heading>
        </GridBox>
      </GridBox>
    )

  return (
    <Form
      name="kontaktskjema"
      method="post"
      // action="/takk"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="kontaktskjema" />
      <div hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </div>
      <FormGroup>
        <FormLabel htmlFor="firstName" id="firstName">
          Navn
        </FormLabel>
        <FormInput
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Ola Nordmann"
          onChange={handleChange}
          ref={register({
            required: "Navnefeltet må fylles ut",
          })}
          disabled={isSubmitting}
          aria-invalid={errors.firstName ? "true" : "false"}
          aria-describedby="error-firstName-required"
        />
        {errors.firstName && (
          <ErrorMessage role="alert" id="error-firstName-required">
            {errors.firstName.message}
          </ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="phone">Telefonnummer</FormLabel>
        <FormInput
          type="text"
          name="phone"
          id="phone"
          placeholder="90113000"
          ref={register({
            required: "Jeg tar gjerne imot telefonnummeret ditt også",
            pattern: {
              value: /^[0-9]{8}$/g,
              message: "Åtte siffer, uten mellomrom",
            },
          })}
          disabled={isSubmitting}
        />
        {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Epostadresse</FormLabel>
        <FormInput
          type="text"
          name="email"
          id="email"
          placeholder="ola@nordmann.no"
          ref={register({
            required: "For å svare deg trenger jeg epost-adressen din",
            pattern: {
              // eslint-disable-next-line
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
              message: "Det må være en gyldig epost-adresse",
            },
          })}
          disabled={isSubmitting}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="error-email-required error-email-pattern"
        />
        {errors.email && errors.email.type === "required" && (
          <ErrorMessage role="alert" id="error-email-required">
            {errors.email.message}
          </ErrorMessage>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorMessage role="alert" id="error-email-pattern">
            {errors.email.message}
          </ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="message">Melding</FormLabel>
        <TextArea
          name="message"
          id="message"
          placeholder="En forespørsel til fotografen..."
          rows="7"
          ref={register({
            required: "Husket du å skrive inn en melding her?",
          })}
          disabled={isSubmitting}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby="error-message-required"
        />
        {errors.message && (
          <ErrorMessage role="alert" id="error-message-required">
            {errors.message.message}
          </ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Submit />
      </FormGroup>
    </Form>
  )
}

export default ContactForm
