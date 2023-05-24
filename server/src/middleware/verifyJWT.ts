
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
user?: string;
roles?: string[];
}

interface DecodedToken {
  UserInfo: {
    email: string;
    roles: string[];
  };
}

interface CustomRequest extends Request {
  user?: string;
  roles?: string[];
}

const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (Array.isArray(authHeader)) {
    authHeader = authHeader[0];
  }

  if (typeof authHeader !== 'string' || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as DecodedToken;
    req.user = decoded.UserInfo.email;
    req.roles = decoded.UserInfo.roles;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

export default verifyJWT;