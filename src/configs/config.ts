import path = require("path");
require('dotenv').config()



// config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) })

const Env = {
    env: String(process.env.NODE_ENV),
    key: String(process.env.APP_KEY),
    host: String(process.env.DATABASE_HOST),
    port: Number(process.env.DATABASE_PORT),
    username: String(process.env.DATABASE_USER),
    password: String(process.env.DATABASE_PASSWORD),
    database: String(process.env.DATABASE_NAME),
    TWILIO_ACCOUNT_SID: String(process.env.TWILIO_ACCOUNT_SID),
    TWILIO_AUTH_TOKEN: String(process.env.TWILIO_AUTH_TOKEN),
    VERIFICATION_SID: String(process.env.VERIFICATION_SID),
    SENDGRID_API_KEY: String(process.env.SENDGRID_API_KEY),
}

export default Env;