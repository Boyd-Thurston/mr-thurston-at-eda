// set of functions for accessing information from the database 

const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

module.exports = {
  getArticle,
  getNavData,
  getFeaturedArticle
}


// searches the database to create dropdown links for each article in database split by 
// article type, to be used in the Navigation Bar 
// 
function getNavData(db = database) {
  let navData = {}
  return db('articles').select('id', 'title', 'subtitle', 'type')
  .then( data => {
    navData.navTechBlog = data.filter(element => element.type == 'TechBlog')
    navData.navCulturalBlog = data.filter(element => element.type == 'CulturalBlog')
    return navData
  })
}

// searches the database for a particular article based on ID
// 
function getArticle(id, db = database) {
  return db('articles').where('id', id).select().first()
}

// searches the database for the latest entered article based on the article type
// 
function getFeaturedArticle (type, db = database) {
  return db('articles').where('type', type).select()
  .then( data => {
    data.reverse()
    return data[0]
  })
}