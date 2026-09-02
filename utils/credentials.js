import dotenv from 'dotenv'
dotenv.config();

export const creds = {
    baseurl: process.env.BASE_URL || undefined,
    loginusername: process.env.LOGINUSERNAME || undefined,
    password: process.env.PASSWORD || undefined,
}