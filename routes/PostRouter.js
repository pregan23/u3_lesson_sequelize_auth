const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')
router.get('/', controller.GetPosts)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put('/:post_id', controller.UpdatePost)
router.delete('/:post_id', controller.DeletePost)

module.exports = router
