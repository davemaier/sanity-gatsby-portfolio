export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      },
    },
    {
      name: "gatsby",
      options: {
        instances: [
          {
            instanceUrl: "<previewInstanceUrl>",
          },
        ],
      },
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df4ab7c9fbf45e5025980e6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mqti1z1o',
                  apiId: '620bfeb1-0688-45cc-ab77-392e328315c5'
                },
                {
                  buildHookId: '5df4ab7df85a8fd4495d652a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9zsptije',
                  apiId: '7712b546-aabb-4fc6-9d46-90ce7e3e2b2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davemaier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9zsptije.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
