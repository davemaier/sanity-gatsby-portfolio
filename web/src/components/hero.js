import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity/lib-es5'
import Img from 'gatsby-image'


import styles from './hero.module.scss'


const Hero = ({ title, subTitle, image }) => {

    const sanityConfig = { projectId: 'yhql8ehe', dataset: 'production' }
    console.log(styles)
    return (
        <div>
            <section className={"hero is-large is-primary " + styles.hasBackground}>
            
            <Img className={styles.background}
                    fluid={getFluidGatsbyImage(image, { width: 1024 }, sanityConfig)}
                    alt={image.alt}

                    //override default style of gatsby-image plugin
                    style={{position: "absolute"}}
                />
                <div className="hero-body">
                    <div className="container">

                        <h1 className="title is-size-1-desktop">
                            {title}
                        </h1>

                        <h2 className="subtitle is-size-2-desktop">
                            {subTitle}
                        </h2>
                    </div>
                </div>
                
            </section>
        </div>
    )
};

export default Hero
