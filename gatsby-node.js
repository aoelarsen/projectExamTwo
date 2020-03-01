const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// Create pages for each gallery and
// Create pages for each news post
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await graphql(`
    query GET_GALLERIES {
      wpgraphql {
        page(id: "cGFnZToy") {
          childPages(first: 15) {
            nodes {
              slug
              title
              id
              content
              databaseId
              acfPostGallery {
                acfimagecollection {
                  acfimage1 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage2 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage3 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage4 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage5 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage6 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage7 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage8 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage9 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage10 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage11 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage12 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage13 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage14 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                  acfimage15 {
                    id
                    slug
                    title
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    const {
      wpgraphql: {
        page: {
          childPages: { nodes },
        },
      },
    } = data

    nodes &&
      nodes.map(gallery => {
        createPage({
          path: `/gallerier/${gallery.slug}`,
          component: path.resolve(`./src/templates/galleryTemplate.js`),
          context: {
            databaseId: gallery.databaseId,
          },
        })
      })
  })

  await graphql(`
    query GET_NEWS_POSTS {
      wpgraphql {
        posts(where: { categoryId: 6, orderby: { field: DATE, order: DESC } }) {
          nodes {
            databaseId
            id
            date
            title
            slug
            excerpt
            content
            featuredImage {
              id
              title
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    const {
      wpgraphql: {
        posts: { nodes },
      },
    } = data

    nodes &&
      nodes.map(newsPost => {
        createPage({
          path: `/nyhetsarkiv/${newsPost.slug}`,
          component: path.resolve(`./src/templates/newsPostTemplate.js`),
          context: {
            wpId: newsPost.id,
          },
        })
      })
  })
}

// Create image resolver
// (from tutorial: https://dev.to/nevernull/how-to-handle-images-and-make-use-of-gatsby-image-guide-to-gatsby-wordpress-starter-advanced-with-previews-i18n-and-more-g9b)
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }
          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
