// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'UCourse',
  plugins: [
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
  ]
}
