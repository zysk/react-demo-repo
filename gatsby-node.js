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
      works1: allContentfulWorksProjectTemplate {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.stories.nodes.forEach(story => {
    createPage({
      path: `/stories/${story.slug}`,
      component: path.resolve(`src/templates/stories.js`),
      context: {
        slug: story.slug,
      },
    })
  })

  result.data.works1.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(`src/templates/works-template.js`),
      context: {
        slug: work.slug,
      },
    })
  })
}
