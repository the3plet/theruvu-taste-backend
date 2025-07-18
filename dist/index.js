"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const foodspot_routes_1 = __importDefault(require("./modules/foodspot/routes/foodspot.routes"));
const user_route_1 = __importDefault(require("./modules/user/routes/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/foodspots', foodspot_routes_1.default);
app.use('/api/users', user_route_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀Running on PORT: ${PORT}`);
});
