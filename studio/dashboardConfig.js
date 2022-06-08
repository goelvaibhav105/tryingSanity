export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a086f3f3e6d20058f6d468',
                  title: 'Sanity Studio',
                  name: 'tryingsanity-studio',
                  apiId: 'ccb16bed-7f25-4bb8-8d46-b5ade1597522'
                },
                {
                  buildHookId: '62a086f3629b7110baa5ec32',
                  title: 'Landing pages Website',
                  name: 'tryingsanity',
                  apiId: '8aa8eade-16a8-4d35-98ac-bc489185b12e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/goelvaibhav105/tryingSanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tryingsanity.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
