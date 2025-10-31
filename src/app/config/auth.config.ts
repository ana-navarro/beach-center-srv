import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { randomBytes } from "node:crypto";

interface MyJwtPayload extends JwtPayload {
  _id: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

class AuthService {
  private static secrets: Record<string, string> = {};

  private static getSecret(type = 'default'): string {
    const envName = `JWT_SECRET_${type.toUpperCase()}`;
    const fromEnv = process.env[envName] as string | undefined;
    if (fromEnv && fromEnv.length > 0) return fromEnv;

    if (!this.secrets[type]) {
      this.secrets[type] = randomBytes(48).toString('hex');
    }

    return this.secrets[type];
  }
  private static tokenGenerate(type = 'default'): string {
    return this.getSecret(type);
  }

  public static verifyToken(token: string, type = 'default') {
    return (jwt as any).verify(token, this.tokenGenerate(type) as any) as unknown as MyJwtPayload;
  }

  public static generateToken(_id: string, type = 'default', expiresIn = '30d'): string {
    return (jwt as any).sign({ _id }, this.tokenGenerate(type) as any, {
      expiresIn,
    });
  }

  public static checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({ msg: "No token found! You are not authorized!" });
    }

    try {
  const decoded = (jwt as any).verify(token, this.tokenGenerate() as any) as unknown as MyJwtPayload;
      req.user = { id: decoded._id };
      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ msg: "Token is invalid! " });
    }
  }

  public static authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).send({ message: 'Usuário não autenticado! (Token mal formatado ou ausente)' });
    }

    const token: string = authHeader.split(' ')[1] || '';

    try {
  const user = (jwt as any).verify(token, this.tokenGenerate() as any) as unknown as MyJwtPayload;

      if (user) {
        req.body.user = user._id;
        next();
      } else {
        res.status(500).send({ message: 'Usuário não autenticado!' });
      }
    } catch (err) {
      res.status(401).send({ message: 'Token inválido ou expirado!' });
    }
  }
}

export default AuthService;