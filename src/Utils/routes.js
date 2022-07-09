const { Router } = require('express') // const router = require('express').Router()
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const UserController = require('../Controllers/UserController')

const router = Router()

// Rotas linkadas aos arquivos na posta Controllers

router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)

router.post('/login', LoginController.login)

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listPosts)
router.delete('/posts/:post_id', PostController.deletePost)
router.put('/posts/:post_id', PostController.editPost)
// like
// editar foto
// ver perfil

router.get('/', (req, res) => {
    res.send('instagram')
})

module.exports = router