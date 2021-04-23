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
      works2: allContentfulLePetitTrianonProject {
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
  result.data.works2.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(`src/templates/lepetit-trianon-template.js`),
      context: {
        slug: work.slug,
      },
    })
  })
}
