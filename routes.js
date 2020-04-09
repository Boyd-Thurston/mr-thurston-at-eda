const express = require('express')
const router = express.Router()
const db = require('./db')
const compile = require('./compilerFunctions')

let navData = null
db.getNavData().then( data => {
    navData = data
})

router.get('/', (req,res) => {
    compile.index()
    .then(viewData => {
      res.render('home', viewData)})
})

router.get('/article/:type/:title/:id', (req,res) => {
  db.getArticle(req.params.id)
    .then(article => {
      article.navTechBlog = navData.navTechBlog
      article.navCulturalBlog = navData.navCulturalBlog
      res.render('article', article)
    })
})

module.exports = {
    router,
}