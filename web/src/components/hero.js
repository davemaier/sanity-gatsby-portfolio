import React from 'react'
import { getFluidGatsbyImage } from 'gatsby-source-sanity/lib-es5'
import Img from 'gatsby-image'
import clientConfig from '../../client-config'
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const HeroWrapper = styled.section({
    position: 'relative',
    overflow: 'hidden',
})



const heroImageStyle = {
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center center',
    width: '100%',
    height: '100%',
}


const Hero = ({ title, subTitle1, subTitle2, image }) => {

    return (
        
            <HeroWrapper className="hero is-large is-primary">
            
            <Img fluid={getFluidGatsbyImage(image, {maxWidth: 1024}, clientConfig.sanity)} alt={image.alt} style={heroImageStyle}/>

                <div className="hero-body">
                    <div className="container">

                        <h1 className="title has-text-grey-darker is-size-2-desktop is-family-monospace">
                            {title}
                        </h1>

                        <h2 className="subtitle has-text-grey-darker is-size-3-desktop is-family-monospace">
                            {subTitle1} <br/>
                            {subTitle2}
                            
                        </h2>
                    </div>
                </div>
                
            </HeroWrapper>
        
    )
};

export default Hero
