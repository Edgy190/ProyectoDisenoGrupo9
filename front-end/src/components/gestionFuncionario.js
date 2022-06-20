import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css';
import {Link} from 'react-router-dom'

const iconStyle = {
    fontSize: 150,
    height: "200px",
    width: "200px",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
}

const btnInfoStyle = {
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px"
}

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}

const GestionFuncionarioComponent = () => {

    const {use_email} = useParams()

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/`} className="btn btn-info" style={btnInfoNavStyle} type="button">Logout</Link>
                    </form>
                </div>
            </nav>
            <div className='centerButton'>
                <Link to={`/editUser/${use_email}/${use_email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-calendar-day" style={iconStyle}><h5>Reservar</h5></i></Link>
                <Link to={`/vehicle/${use_email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-car" style={iconStyle}><h5> Mis vehiculos </h5></i></Link>
            </div>
            <div className='centerButton'>
                <Link to={`/editUser/${use_email}/${use_email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-calendar-days" style={iconStyle}><h5>Franjas Horarias</h5></i></Link>
                <Link to={`/editNormalUser/${use_email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-pen-to-square" style={iconStyle}><h5> Editar Perfil </h5></i></Link>
            </div>
        </div>
    )
}

export default GestionFuncionarioComponent