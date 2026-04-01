const express = require('express')
const router = express.Router()

// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
router.get('/blogpost/:slug',(req , res ) => {
    res.send(` this is blog for ${req.params.slug}`)
})  

module.exports = router
