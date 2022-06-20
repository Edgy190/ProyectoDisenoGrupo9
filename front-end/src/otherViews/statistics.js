import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/parking/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompStatistics = () => {

    const {use_email} = useParams()

    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/management/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container'>
            <select className="form-select" aria-label="Default select example">
                <option value="InfoGeneralParqueo" className="form-select">Ver información general de los estacionamientos</option>
                <option value="InfoGeneralFuncionario" className="form-select">Ver información general de los funcionarios</option>
                <option value="InfoPorcentajeOcupacionParqueo" className="form-select">Ver porcentaje de ocupación de un estacionamiento particular</option>
                <option value="InfoOcupaciónDepartamento" className="form-select">Ver ocupación por departamento</option>
            </select>
            </div>
        </div>
    )
}

export default CompStatistics