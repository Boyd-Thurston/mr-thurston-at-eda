const express = require('express')
const router = express.Router()
const compile = require('./compilerFunctions')

router.get('/', (req,res) => {
  compile.index()
  .then(viewData => {
    res.render('home', viewData)
  })
})

router.get('/article/:type/:title/:id', (req,res) => {
  compile.article(req.params.id)
  .then(article => {
    res.render('article', article)
  })
})

module.exports = {
    router,
}