import React from 'react';
import clientConfig from '../../client-config';
import { getFixedGatsbyImage } from 'gatsby-source-sanity/lib-es5'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'
import styled from '@emotion/styled'


const ItemWrapper = styled.div(props => ({

    marginTop: "100px",
    
    '@media screen and (min-width: 769px)': {
        direction: props.isReversed ? 'rtl' : 'ltr',
    },
    
    

    ":last-of-type": {
        marginBottom: "30px"
    }
    
}))

const ItemText = styled.div({
    direction: "ltr"
})

const StyledBlockContent = styled(BlockContent)({
    marginTop: "30px",
    'p': {
        marginTop: "10px"
    }
})


const InfoItem = ({item, isReversed}) => {
    
    return (
    
    <ItemWrapper isReversed={isReversed} className="columns is-vcentered">
        <div className={`column`}>
            <Img 
                fixed={getFixedGatsbyImage(item.image, { width: 200, height: 200 }, clientConfig.sanity)}
                alt={item.image.alt}
            />
        </div>
        

        <ItemText className={`column has-text-left-tablet`}>
            <h1 className="is-size-4">{item.title}</h1>
            <StyledBlockContent  blocks={item.text} {...clientConfig.sanity}></StyledBlockContent>
        </ItemText>
    </ItemWrapper>
)}

export default InfoItem;