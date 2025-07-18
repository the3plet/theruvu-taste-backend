"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodspotRepository = void 0;
const prisma_1 = __importDefault(require("../../../config/prisma"));
exports.FoodspotRepository = {
    create: async (data, ownerId) => {
        return await prisma_1.default.foodSpot.create({ data: { ...data, owner: { connect: { id: ownerId } } } });
    },
    getAll: async () => {
        return await prisma_1.default.foodSpot.findMany();
    },
    getById: async (id) => {
        return await prisma_1.default.foodSpot.findUnique({ where: { id } });
    },
    update: async (id, data) => {
        return await prisma_1.default.foodSpot.update({ where: { id }, data });
    },
    delete: async (id) => {
        return await prisma_1.default.foodSpot.delete({ where: { id } });
    },
    findByIdAndOwner: async (id, ownerId) => {
        return await prisma_1.default.foodSpot.findFirst({ where: { id, ownerId } });
    }
};
