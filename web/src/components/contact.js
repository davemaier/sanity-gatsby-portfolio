import React from 'react'
import styled from '@emotion/styled'

const ContactContainer = styled.div({
    maxWidth: "800px"
})

const ContactForm = styled.form({
    marginTop: "1rem"
})

const SendButton = styled.button(
    
)

const FormField = styled.div({
    marginTop: "30px"
})

const Contact = ({ children }) => (
    <section id="contact" className="section has-background-primary">
        <ContactContainer className="container">
            <div className="columns is-centered">
                <div className="column is-7">
                    <h1 className="is-size-2">Interested?</h1>
                    <h2 className="is-size-5">Let's get in contact and talk about your ideas!</h2>
                </div>
            </div>



            <ContactForm name="Contact Form" method="POST" data-netlify="true">
                <div className="columns is-centered">
                <div className="column">
                    <input className="input" type="hidden" name="form-name" value="Contact Form" />

                    <FormField className="field">
                        <label className="label">Name:</label>
                        <div className="control">
                            <input className="input" type="text" name="name" />
                        </div>
                    </FormField>

                    <FormField className="field">
                        <label className="label">E-mail:</label>
                        <div className="control">
                            <input className="input" type="email" name="email" />
                        </div>
                    </FormField>

                    <FormField className="field">
                        <label className="label">Company: (optional)</label>
                        <div className="control">
                            <input className="input" type="text" name="company" />
                        </div>
                    </FormField>

                </div>

                <div className="column is-1"></div>

                <div className="column">
                    <FormField style={{height:"100%"}} className="field">

                        <label className="label">Message:</label>
                        <div style={{height: "80%"}} className="control">
                            <textarea className="textarea" name="message" />
                        </div>
                    </FormField>


                </div>

                </div>

                <FormField className="field">
                    <div className="control has-text-centered">
                        <SendButton className="button is-link" type="submit">Send</SendButton>
                    </div>
                </FormField >


            </ContactForm>


        </ContactContainer>
    </section>
);

export default Contact;
