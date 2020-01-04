import React from 'react'

const Contact = ({ children }) => (
    <section className="section has-background-grey-light">
        <div className={`container has-text-centered`}>
            <h1 className="is-size-2">
                Interested?
            </h1>
            <h2 className="is-size-5">
                Let's get in contact and talk about your ideas!
            </h2>

            <div>
                <form className="has-text-left" name="Contact Form" method="POST" data-netlify="true">

                    <input className="input" type="hidden" name="form-name" value="Contact Form" />

                    <div className="field">

                        <label className="label">Your Email:</label>
                        <div className="control">
                            <input className="input" type="email" name="email" />
                        </div>
                    </div>

                    <div className="field">

                        <label className="label">Message:</label>
                        <div className="control">
                            <textarea className="textarea" name="message" />
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <div class="control">
                            <button className="button is-link" type="submit">Send</button>
                        </div>
                    </div>
                    
                </form>
            </div>

        </div>
    </section>
);

export default Contact;
