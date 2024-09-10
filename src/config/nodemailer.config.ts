import nodemailer,{Transporter} from 'nodemailer'
import { env } from '../schemas/env.schema.js'

let transporter : Transporter;

try {
    transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:env.EMAIL,
            pass:env.PASSWORD
        }
    })
} catch (error) {
    console.log(error);
}

export {
    transporter
}

