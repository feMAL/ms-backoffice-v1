import { registerAs } from "@nestjs/config";

export default registerAs('ext_services', () => ({
    acvUrl: process.env.ACCESS_VALIDATION_URL,
}))