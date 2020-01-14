import React from 'react'
import styled from '@emotion/styled'
import clientConfig from '../../client-config'
import BlockContent from '@sanity/block-content-to-react'

const HeadItemWrapper = styled.div({
    
})

const StyledBlockContent = styled(BlockContent)({
    marginTop: "30px",

    'p': {
        marginTop: "10px"
    }
})

export default ({headItem}) => (


    <HeadItemWrapper className="columns is-centered has-text-left-tablet">
        <div className="column is-4">

        <span className="is-size-3">{headItem.headTitleLarge}</span>
        <span className="is-size-4"> {headItem.headTitleSmall}</span>
        <StyledBlockContent  blocks={headItem._rawHeadText} {...clientConfig.sanity}></StyledBlockContent>
        </div>
    </HeadItemWrapper>


)