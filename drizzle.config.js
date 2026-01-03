import  { ENV } from "./srcs/config/env.js";

export default {
	schema: "./srcs/db/schema.js",
	out: "./srcs/db/migrations",
	dialect: "postgresql",
	dbCredentials: { url: ENV.DATABASE_URL },
};
