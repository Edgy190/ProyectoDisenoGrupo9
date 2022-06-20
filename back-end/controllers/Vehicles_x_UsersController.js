import Vehicle_x_UserModel from "../models/Vehicles_X_Users.js"
import { Op } from "sequelize";

export const getAllVXU = async (req, res) => {
    try {
        const vxu = await Vehicle_x_UserModel.findAll();
        res.json(vxu);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getVXU = async (req, res) => {
    try {
        const vxu = await Vehicle_x_UserModel.findAll({
            where: { [Op.or]: [
                { vehicle_plate: req.params.vehicle_plate },
                { email: req.params.email }
            ] }
        });
        res.json(vxu[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const createVXU = async (req, res) => {
    try {
        await Vehicle_x_UserModel.create(req.body)
        res.json({
            "message":"Vehiculo creado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const updateVXU = async (req, res) => {
    try {
        await Vehicle_x_UserModel.update(req.body, {
            where: { [Op.or]: [
                { vehicle_plate: req.params.vehicle_plate },
                { email: req.params.email }
            ] }
        });
        res.json({
            "message":"Vehiculo actualizado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const deleteVXU = async (req, res) => {
    try {
        await Vehicle_x_UserModel.destroy({
            where: { [Op.or]: [
                { vehicle_plate: req.params.vehicle_plate },
                { email: req.params.email }
            ] }
        });
        res.json({
            "message":"Vehiculo borrado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}