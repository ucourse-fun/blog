// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'UCourse',
  plugins: [
     {
       use: '@gridsome/plugin-google-analytics',
       options: {
         id: 'UA-160612435-1'
       }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Course', // Required
        baseDir: './content/courses', // Where .md files are located
        pathPrefix: '/courses', // Add route prefix. Optional
        template: './src/templates/Course.vue', // Optional,
        refs: {
          sections: {
            typeName: 'Section',
          },
          topics: 'Topic',
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Section', // Required
        baseDir: './content/sections', // Where .md files are located
        refs: {
            units: 'Unit'
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Unit', // Required
        baseDir: './content/units', // Where .md files are located
        pathPrefix: '/units', // Add route prefix. Optional
        //template: './src/templates/Unit.vue', // Optional,
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Topic', // Required
        baseDir: './content/topics', // Where .md files are located
        pathPrefix: '/topics', // Add route prefix. Optional
        //template: './src/templates/Topic.vue', // Optional,
      }
    },
  ]
}
