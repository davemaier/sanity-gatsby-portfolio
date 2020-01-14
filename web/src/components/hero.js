import React from 'react'
import styled from "@emotion/styled"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const HeroWrapper = styled.section({
    position: 'relative',
    overflow: 'hidden',
})



const HeroImage = styled.img({
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center center',
    width: '100%',
    height: '100%',

    '@media screen and (max-width: 769px)': {
        display: "none",
    }
})


const Hero = ({ title, subTitle1, subTitle2, image }) => {

    return (
        
            <HeroWrapper className="hero is-large is-primary">
            


            <HeroImage src={imageUrlFor(buildImageObj(image))
              .width(1920)
              .height(Math.floor((9 / 16) * 1920))
              .fit('crop')
              .auto('format')
              .url()} alt={image.alt} />

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
