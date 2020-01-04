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
                <form name="Contact Form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div>
                        <label>Your Email:</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
    </section>
);

export default Contact;
