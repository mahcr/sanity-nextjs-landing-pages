export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
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
                  buildHookId: '5fc7c001f041f9aaa202157f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4v55uz97',
                  apiId: 'd18126f1-400f-4a93-9a85-389f6b22b154'
                },
                {
                  buildHookId: '5fc7c001404c1aa482af3b7c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y6v2375m',
                  apiId: '12792523-43d3-4387-a621-f01311f5a5a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mahcr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y6v2375m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
