import React from 'react'


const Hero = ({title, subTitle}) => (

    <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">

                <h1 className="title">
                    {title}
                </h1>

                <h2 className="subtitle">
                    {subTitle}
                </h2>

            </div>
        </div>
    </section>
)

export default Hero
