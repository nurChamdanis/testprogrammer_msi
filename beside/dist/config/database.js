"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const dbConfig = () => ({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: "postgres",
    password: "admin",
    database: "minimarket",
    ssl: process.env.POSTGRES_SSL === 'true',
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    synchronize: true,
    dropSchema: false,
    migrationsRun: true,
    logging: true,
    migrations: [(0, path_1.join)(__dirname, '../migrations/**/*{.ts,.js}')],
});
exports.dbConfig = dbConfig;
if (process.env.NODE_ENV === 'development') {
    common_1.Logger.debug((0, exports.dbConfig)());
}
exports.default = (0, exports.dbConfig)();
//# sourceMappingURL=database.js.map