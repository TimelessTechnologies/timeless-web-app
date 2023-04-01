const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/about-us",
    redirectInBrowser: true,
    IsPermanent: true,
  });
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          wpcontent {
            pages {
              edges {
                node {
                  id
                  slug
                  status
                  template {
                    templateName
                  }
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  title
                  content
                }
              }
            }
          }
        }
      `
    )
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const aboutUsTemplate = path.resolve("./src/templates/aboutUs.js");

        const ourServicesTemplate = path.resolve("./src/templates/ourServices.js");

        const ourTechnologyTemplate = path.resolve("./src/templates/ourTechnology.js");

        const contactTemplate = path.resolve("./src/templates/contact.js");

        const privacyPolicyTemplate = path.resolve("./src/templates/privacyPolicy.js");

        // Helper function to select template
        const componentName = (templateName) => {
          let component
          switch (templateName) {
            case "About Us":
              component = aboutUsTemplate
              break;
            case "Our Services":
              component = ourServicesTemplate
              break;
            case "Technology":
              component = ourTechnologyTemplate
              break;
            case "Contact":
              component = contactTemplate
              break;
            case "Privacy Policy":
              component = privacyPolicyTemplate
              break;
          }
          return component;
        }

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.wpcontent.pages.edges, (edge) => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.


          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(edge.node.template && componentName(edge.node.template.templateName)),
            context: edge.node,
          });
        });
      })
      // ==== END PAGES ====

      // ==== SERVICE ====
      .then(() => {
        graphql(
          `
            {
              wpcontent {
                services {
                  edges {
                    node {
                      content
                      service {
                        websiteUrl
                      }
                      title
                      slug
                      link
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      excerpt
                    }
                  }
                }
              }
            }
          `
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const serviceTemplate = path.resolve(
            "./src/templates/service.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wpcontent.services.edges, (edge) => {
            createPage({
              path: `/service/${edge.node.slug}/`,
              component: slash(serviceTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END SERVICE ====

      // ==== PARTNER ====
      .then(() => {
        graphql(
          `
            {
              wpcontent {
                partners {
                  edges {
                    node {
                      content
                      partner {
                        websiteUrl
                      }
                      title
                      slug
                      link
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      excerpt
                    }
                  }
                }
              }
            }
          `
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const partnerTemplate = path.resolve(
            "./src/templates/partner.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wpcontent.partners.edges, (edge) => {
            createPage({
              path: `/partner/${edge.node.slug}/`,
              component: slash(partnerTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END PARTNER ====

      // ==== TECHNOLOGY ====
      .then(() => {
        graphql(
          `
            {
              wpcontent {
                technologies {
                  edges {
                    node {
                      content
                      technology {
                        websiteUrl
                      }
                      title
                      slug
                      link
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      excerpt
                    }
                  }
                }
              }
            }
          `
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const technologyTemplate = path.resolve(
            "./src/templates/technology.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.wpcontent.technologies.edges, (edge) => {
            createPage({
              path: `/technology/${edge.node.slug}/`,
              component: slash(technologyTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END TECHNOLOGY ====

      // ==== BLOG POSTS ====
      .then(() => {
        graphql(
          `
            {
              wpcontent {
                posts {
                  edges {
                    node {
                      excerpt
                      id
                      date
                      title
                      content
                      slug
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const posts = result.data.wpcontent.posts.edges;
          const postsPerPage = 2;
          const numberOfPages = Math.ceil(posts.length / postsPerPage);
          const blogTemplate = path.resolve("./src/templates/blog.js");

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(blogTemplate),
              path: index === 0 ? "/blog" : `/blog/${index + 1}`,
              context: {
                posts: posts.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                numberOfPages,
                currentPage: index + 1,
              },
            });
          });

          const pageTemplate = path.resolve("./src/templates/blogPost.js");
          _.each(posts, (post) => {
            createPage({
              path: `/post/${post.node.slug}`,
              component: slash(pageTemplate),
              context: post.node,
            });
          });

          resolve();
        });
      });
    // ==== END POSTS ====
  });
};