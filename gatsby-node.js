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
      works1: allContentfulArchvillaProject {
        nodes {
          slug
        }
      }

      works2: allContentfulLePetitTrianonProject {
        nodes {
          slug
        }
      }
      works3: allContentfulGranadaTheatreProject {
        nodes {
          slug
        }
      }
      works4: allContentfulArtForJusticeProject {
        nodes {
          slug
        }
      }
      works5: allContentfulSouthernPlainsMuseumProject {
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
      component: path.resolve(`src/templates/archvilla-template.js`),
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
  result.data.works3.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(`src/templates/granada-theatre-template.js`),
      context: {
        slug: work.slug,
      },
    })
  })
  result.data.works4.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(`src/templates/artForJustice-template.js`),
      context: {
        slug: work.slug,
      },
    })
  })
  result.data.works5.nodes.forEach(work => {
    createPage({
      path: `/works/${work.slug}`,
      component: path.resolve(
        `src/templates/southern-plains-museum-template.js`
      ),
      context: {
        slug: work.slug,
      },
    })
  })
}
