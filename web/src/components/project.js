import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'

import RoleList from './role-list'
import Img from 'gatsby-image'


import styles from './project.module.css'
import { getFluidGatsbyImage } from 'gatsby-source-sanity/lib-es5'

function Project (props) {
  const sanityConfig = {projectId: 'yhql8ehe', dataset: 'production'}
  const {_rawBody, title, categories, mainImage, members, publishedAt, relatedProjects} = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <Img
            fluid={getFluidGatsbyImage(mainImage, {width: 1024}, sanityConfig)}
            alt={mainImage.alt}
          />
        </div>
      )}
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
            {relatedProjects && relatedProjects.length > 0 && (
              <div className={styles.relatedProjects}>
                <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                <ul>
                  {relatedProjects.map(project => (
                    <li key={`related_${project._id}`}>
                      {project.slug ? (
                        <Link to={`/project/${project.slug.current}`}>{project.title}</Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
    </article>
  )
}

export default Project
