import DepartmentModel from "../models/Departments.js";

export const getAllDepartments = async (req, res) => {
    try {
        const departaments = await DepartmentModel.findAll();
        res.json(departaments);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const getDepartment = async (req, res) => {
    try {
        const departament = await DepartmentModel.findAll({
            where: {
                name_department: req.params.name_department
            }
        });
        res.json(departament[0]);
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const createDepartment = async (req, res) => {
    try {
        await DepartmentModel.create(req.body)
        res.json({
            "message":"Departamento creado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const updateDepartment = async (req, res) => {
    try {
        await DepartmentModel.update(req.body, {
            where: {name_department: req.params.name_department}
        });
        res.json({
            "message":"Departamento actualizado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}

export const deleteDepartment = async (req, res) => {
    try {
        await DepartmentModel.destroy({
            where: {name_department: req.params.name_department}
        });
        res.json({
            "message":"Departamento borrado"
        });
    } catch (error) {
        res.json( {message: error.message} );
    }
}