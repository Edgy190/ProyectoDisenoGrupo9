import VehicleModel from "../models/Vehicles.js"

export const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await VehicleModel.findAll();
        res.json(vehicles);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getVehicle = async (req, res) => {
    try {
        const vehicle = await VehicleModel.findAll({
            where: {
                vehicle_plate: req.params.id
            }
        });
        res.json(vehicle[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const createVehicle = async (req, res) => {
    try {
        await VehicleModel.create(req.body)
        res.json({
            "message":"Vehiculo creado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const updateVehicle = async (req, res) => {
    try {
        await VehicleModel.update(req.body, {
            where: {vehicle_plate: req.params.id}
        });
        res.json({
            "message":"Vehiculo actualizado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const deleteVehicle = async (req, res) => {
    try {
        await VehicleModel.destroy({
            where: {vehicle_plate: req.params.id}
        });
        res.json({
            "message":"Vehiculo borrado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}