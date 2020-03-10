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
        template: './src/templates/Course.vue' // Optional
      }
    },
  ]
}
