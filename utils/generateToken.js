import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
    console.log('process gene',process.env.ACCESS_TOKEN_SECRET)
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

export const createRefreshToken = (payload) => {
    console.log('process gene',process.env.REFRESH_TOKEN_SECRET)
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}