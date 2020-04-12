// set of functions that compile javascript objects to be used by routes for rendering

const db = require('./db')

module.exports = {
  index: compileIndex,
  article: compileArticle,
}


// gather index data to be used in rendering index page
async function compileIndex () {
return new Promise ((resolve,reject) => {
  let baseIndexData = {
  title: "A journey to become a webdeveloper",
  subtitle: "Mr Thurston at EDA",
  featuredArticle: []
  }
  db.getNavData()
    .then( data => {
      baseIndexData.navCulturalBlog = data.navCulturalBlog
      baseIndexData.navTechBlog = data.navTechBlog
      db.getFeaturedArticle('CulturalBlog')
        .then(featuredData => {
          featuredData.content = featuredData.content.slice(0,600) +'...'
          baseIndexData.featuredArticle.push(featuredData)
          db.getFeaturedArticle('TechBlog')
            .then(featuredData => {
              featuredData.content = featuredData.content.slice(0,600) +'...'
              baseIndexData.featuredArticle.push(featuredData)
              resolve(baseIndexData)
            })
        })
    })
  })
}


// gater article data to be used in rendering an article page

async function compileArticle (id) {
  return new Promise((resolve,reject) => {
    let articleViewData = null
    db.getArticle(id)
      .then(articleData => {
        articleViewData = articleData
        db.getNavData()
          .then(navData => {
            articleViewData.navCulturalBlog = navData.navCulturalBlog
            articleViewData.navTechBlog = navData.navTechBlog
            resolve(articleViewData)
          })
        })
  })
}