"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodspotController = void 0;
const foodspot_service_1 = require("../services/foodspot.service");
exports.FoodspotController = {
    create: async (req, res) => {
        try {
            const ownerId = req.user?.userId;
            if (!ownerId)
                return res.status(401).json({ error: "Unauthorized" });
            const newSpot = await foodspot_service_1.FoodspotService.createFoodspot(req.body, ownerId);
            res.status(201).json(newSpot);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAll: async (_req, res) => {
        try {
            const foodSpot = await foodspot_service_1.FoodspotService.getAllFoodspot();
            res.json(foodSpot);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getById: async (req, res) => {
        try {
            const foodSpot = await foodspot_service_1.FoodspotService.getFoodspotByid(req.params.id);
            if (!foodSpot)
                return res.status(404).json({ error: "Specific FoodSpot Not Found" });
            res.json(foodSpot);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const userId = req.user?.userId;
            if (!userId)
                return res.status(401).json({ error: "Unauthorized" });
            const update = await foodspot_service_1.FoodspotService.updateFoodspot(req.params.id, req.body, userId);
            res.json(update);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        try {
            const userId = req.user?.userId;
            if (!userId)
                return res.status(401).json({ error: "Unauthorized" });
            await foodspot_service_1.FoodspotService.deleteFoodspot(req.params.id, userId);
            res
                .status(204)
                .json({ message: `${req.params.id} is deleted` })
                .end();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
