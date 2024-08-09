"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    return app.init();
}
exports.default = async (req, res) => {
    const app = await bootstrap();
    await app.getHttpAdapter().getInstance().handle(req, res);
};
//# sourceMappingURL=main.js.map