import User from '../models/User'
import { Request, Response } from 'express'
// @desc Get current user
// @route GET /user
// @access Private
const getCurrentUser = async (req: Request, res: Response) => {
  const { userId } = req.body
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
    const foundUser = await User.findById(userId).select('-password').exec()
    res.status(200).json(foundUser)
  };

export { getCurrentUser }