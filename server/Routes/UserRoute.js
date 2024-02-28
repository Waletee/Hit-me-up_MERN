import express from 'express'
import { updateUser, getUser, getAllUsers, deleteUser, followUser, unfollowUser } from '../Controllers/UserController.js'
{/*import authMiddleWare from '../middleware/AuthMiddleware.js';
*/}

const router = express.Router()

router.get('/:id', getUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id',/*authMiddleWare,*/ deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)

export default router