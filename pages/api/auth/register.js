import Users from '../../../models/userModel';
import connectDB from '../../../utils/connectDB';
import bcrypt from 'bcrypt';
import { valid } from '../../../utils/valid';

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case 'POST': {
            await register(req, res);
            break;
        }
    }
}

const register = async (req, res) => {
    try {
        const { name, email, phone,root, password, cf_password } = req.body;
        const errMsg = valid(name, phone, email, password, cf_password);

        if (errMsg) {
            return res.status(400).json({ err: errMsg });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({ name, phone, email, root, password: passwordHash, cf_password });

        await newUser.save();

        return res.json({ msg: 'Register success!' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ err: error.message });
    }
}