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

const updateUser = async(req: Request, res: Response) => {
    const { user } = req.body;
    
    if (user) {
      const {name, email, photo, phone, bio } = user;
      user.email = email;
      user.name = req.body.name || name;
      user.phone = req.body.phone || phone;
      user.bio = req.body.bio || bio;
      user.photo = req.body.photo || photo;
  
      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        photo: updatedUser.photo,
        phone: updatedUser.phone,
        bio: updatedUser.bio,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
  

export { getCurrentUser, updateUser }