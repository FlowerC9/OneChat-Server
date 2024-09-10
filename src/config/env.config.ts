import type { IConfig } from "../interfaces/config/config.interface.js"
import { env } from "../schemas/env.schema.js"

const developmentConfig:IConfig = {
    clientUrl:"http://localhost:5173",
    callbackUrl:`http://localhost:${env.PORT}/api/v1/auth/google/callback`,
}

const productionConfig:IConfig = {
    clientUrl:"https://onechat-client.onrender.com",
    callbackUrl:"https://onechat-server.onrender.com/api/v1/auth/google/callback"
}

export const config = env.NODE_ENV==='DEVELOPMENT'?developmentConfig:productionConfig