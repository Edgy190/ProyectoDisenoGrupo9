import UserModel from "../models/Users.js"
import { Op } from "sequelize";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.json(users);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findAll({
            where: { email: req.params.email }
        });
        res.json(user[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getUserFuncionario = async (req, res) => {
    try {
        const funcionarios = await UserModel.findAll({
            where: { [Op.or]: [
                    { type_user: 'JEFATURA' },
                    { type_user: 'FUNCIONARIO' }
                ] }
        });
        res.json(funcionarios);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const auth = async (req, res) => {
    try {
        const authUser = await UserModel.findAll({
            where: {
                email: req.body.email,
            }
        });
        res.json(authUser[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const createUser = async (req, res) => {
    try {
        await UserModel.create(req.body);
        res.json({
            "message":"Usuario creado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const updateUser = async (req, res) => {
    try {
        await UserModel.update(req.body, {
            where: { email: req.params.email }
        });
        res.json({
            "message":"Usuario actualizado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const deleteUser = async (req, res) => {
    try {
        await UserModel.destroy({
            where: { email: req.params.email }
        });
        res.json({
            "message":"Usuario borrado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}