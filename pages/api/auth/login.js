import Users from '../../../models/userModel';
import connectDB from '../../../utils/connectDB';
import bcrypt from 'bcrypt';
import {createAccessToken,createRefreshToken} from '../../../utils/generateToken'

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case 'POST':{
            await login(req, res);
            break; 
        }
    }
}

const login = async (req, res) => {
    try {
        const { phone, password } = req.body;
       
        const user = await Users.findOne({phone});
        if(!user){
            return res.status(400).json({err: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({err: 'Wrong password'});
        }

        const access_token = createAccessToken({id:user._id});
        const refresh_token = createRefreshToken({id:user._id});

        return res.json({
            msg:"Login success",
            access_token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user?.role,
                avatar: user?.avatar
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({err: error.message});
    }
}