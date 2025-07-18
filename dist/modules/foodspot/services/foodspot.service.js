"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodspotService = void 0;
const foodspot_repository_1 = require("../repositories/foodspot.repository");
exports.FoodspotService = {
    createFoodspot: async (input, ownerId) => {
        return await foodspot_repository_1.FoodspotRepository.create(input, ownerId);
    },
    getAllFoodspot: async () => {
        return await foodspot_repository_1.FoodspotRepository.getAll();
    },
    getFoodspotByid: async (id) => {
        return await foodspot_repository_1.FoodspotRepository.getById(id);
    },
    updateFoodspot: async (id, data, ownerId) => {
        const foodspot = await foodspot_repository_1.FoodspotRepository.findByIdAndOwner(id, ownerId);
        if (!foodspot)
            throw new Error("Unauthorized or not found");
        return await foodspot_repository_1.FoodspotRepository.update(id, data);
    },
    deleteFoodspot: async (id, ownerId) => {
        const foodspot = await foodspot_repository_1.FoodspotRepository.findByIdAndOwner(id, ownerId);
        if (!foodspot)
            throw new Error("Unauthorized or not found");
        return await foodspot_repository_1.FoodspotRepository.delete(id);
    },
};
