import jwt from 'jsonwebtoken';
import { randomBytes } from "node:crypto";
class AuthService {
    static secrets = {};
    static getSecret(type = 'default') {
        const envName = `JWT_SECRET_${type.toUpperCase()}`;
        const fromEnv = process.env[envName];
        if (fromEnv && fromEnv.length > 0)
            return fromEnv;
        if (!this.secrets[type]) {
            this.secrets[type] = randomBytes(48).toString('hex');
        }
        return this.secrets[type];
    }
    static tokenGenerate(type = 'default') {
        return this.getSecret(type);
    }
    static verifyToken(token, type = 'default') {
        return jwt.verify(token, this.tokenGenerate(type));
    }
    static generateToken(_id, type = 'default', expiresIn = '30d') {
        return jwt.sign({ _id }, this.tokenGenerate(type), {
            expiresIn,
        });
    }
    static checkToken(req, res, next) {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ msg: "No token found! You are not authorized!" });
        }
        try {
            const decoded = jwt.verify(token, this.tokenGenerate());
            req.user = { id: decoded._id };
            next();
        }
        catch (err) {
            console.error(err);
            return res.status(401).json({ msg: "Token is invalid! " });
        }
    }
    static authMiddleware(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({ message: 'Usuário não autenticado! (Token mal formatado ou ausente)' });
        }
        const token = authHeader.split(' ')[1] || '';
        try {
            const user = jwt.verify(token, this.tokenGenerate());
            if (user) {
                req.body.user = user._id;
                next();
            }
            else {
                res.status(500).send({ message: 'Usuário não autenticado!' });
            }
        }
        catch (err) {
            res.status(401).send({ message: 'Token inválido ou expirado!' });
        }
    }
}
export default AuthService;
