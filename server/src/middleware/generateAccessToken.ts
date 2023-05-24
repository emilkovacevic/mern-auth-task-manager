import jwt from 'jsonwebtoken';

const generateAccessToken = (email: string, roles: string[]) => {
    return jwt.sign(
      {
        UserInfo: {
          email,
          roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET as string,
      { expiresIn: '10m' }
    );
};
  
export default generateAccessToken;