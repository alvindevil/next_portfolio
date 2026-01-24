import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDb(){
    try {
        const mongoUri = process.env.MONGO_URI;
        await mongoose.connect(mongoUri! as string);
        console.log('Database connected successfully');
    } catch (error:any) {
        console.error('Database connection error:', error.message);
    }
}