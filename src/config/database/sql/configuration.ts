import { registerAs } from "@nestjs/config"

export default registerAs('sql', () => ({
    isEnabled: process.env.DB_SQL_ENABLED === 'true' ? true : false,
    host: process.env.DB_SQL_HOSTNAME,
    port: process.env.DB_SQL_PORT,
    name: process.env.DB_SQL_NAME,
    user: process.env.DB_SQL_USER,
    pass: process.env.DB_SQL_PASSWD,
}))