import express from 'express'
import { createPost, getPost, updatePost, deletePost, likePost, getTimelinePosts } from '../Controllers/PostController.js'
import authMiddleWare from '../Middleware/AuthMiddleware.js'
const router = express.Router()

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id', authMiddleWare, updatePost)
router.delete('/:id', authMiddleWare, deletePost)
router.put('/:id/like', authMiddleWare, likePost)
router.get('/:id/timeline', authMiddleWare, getTimelinePosts)

export default router