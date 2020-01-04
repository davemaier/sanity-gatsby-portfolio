import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const HeroImage = styled(Img)({
  marginTop: "30px"
})


function BlogPost (props) {
  const {_rawBody, authors, categories, title, mainImage, publishedAt} = props
  return (
    <article >
      {mainImage && mainImage.asset && (
        <div >
          <HeroImage fluid={getFluidGatsbyImage(mainImage, { width: 1920 }, clientConfig.sanity)}
                    alt={mainImage.alt}
          />

        </div>
      )}
        <div >
          <div >
            {/* <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />} */}
          </div>
          <aside >
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </aside>
        </div>
    </article>
  )
}

export default BlogPost
