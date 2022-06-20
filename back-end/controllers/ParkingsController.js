import ParkingModel from "../models/Parkings.js";

export const getAllParkings = async (req, res) => {
    try {
        const parkings = await ParkingModel.findAll();
        res.json(parkings);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getParking = async (req, res) => {
    try {
        const parkings = await ParkingModel.findAll({
            where: { id: req.params.id }
        });
        res.json(parkings[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getParkingEmail = async (req, res) => {
    try {
        const parkings = await ParkingModel.findAll({
            where: { email_responsible: req.params.use_email }
        });
        res.json(parkings);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const createParking = async (req, res) => {
    try {
        await ParkingModel.create(req.body)
        res.json({
            "message":"Parqueo creado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const updateParking = async (req, res) => {
    try {
        await ParkingModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({
            "message":"Parqueo actualizado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const deleteParking = async (req, res) => {
    try {
        await ParkingModel.destroy({
            where: {id: req.params.id}
        });
        res.json({
            "message":"Parqueo borrado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}