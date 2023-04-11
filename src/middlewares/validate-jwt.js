import { request, response } from 'express';
import jwt from 'jsonwebtoken';
import { Profile } from '../models/Profile.js';
import { Person } from '../models/Person.js';
import { Role } from '../models/Role.js';

export const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            msg: 'Token undefined'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        const profile = await Profile.findOne({where: { id_profile: uid }, include: [Person, Role]});

        if(!profile) {
            return res.status(401).json({
                msg: 'Profile invalid'
            });
        }
        
        if(!profile.state) {
            return res.status(401).json({
                msg: 'Token invalid'
            });
        }

        req.profile = profile;

        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token invalid'
        });
    }
}