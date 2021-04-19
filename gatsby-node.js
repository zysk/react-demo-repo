const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Getstories {
      stories: allContentfulStories {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.stories.nodes.forEach(story => {
    createPage({
      path: `/stories/${story.slug}`,
      component: path.resolve(`src/pages/templates/stories.js`),
      context: {
        slug: story.slug,
      },
    })
  })
}
