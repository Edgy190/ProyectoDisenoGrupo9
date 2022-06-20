import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URIParking = 'http://localhost:8000/parking/'
const URIUser = 'http://localhost:8000/funcionarios/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}

const scrollTable = {
    height: "500px",
    overflow: "auto"
}

const CompStatistics = () => {
    const {use_email} = useParams()

    const [parkings, setParkings] = useState([])
    useEffect( () => {
        getParkings()
    },[])

    const getParkings = async () => {
        const res = await axios.get(URIParking);
        setParkings(res.data);
    }

    const [funcionarios, setFuncionarios] = useState([])
    useEffect( () => {
        getFuncionarios()
    },[])
    const getFuncionarios = async () => {
        const res = await axios.get(URIUser);
        setFuncionarios(res.data);
    }
    /*<select className="form-select" aria-label="Default select example">
        <option value="InfoGeneralParqueo" className="form-select">Ver información general de los estacionamientos</option>
        <option value="InfoGeneralFuncionario" className="form-select">Ver información general de los funcionarios</option>
        <option value="InfoPorcentajeOcupacionParqueo" className="form-select">Ver porcentaje de ocupación de un estacionamiento particular</option>
        <option value="InfoOcupaciónDepartamento" className="form-select">Ver ocupación por departamento</option>
    </select>*/
    return(
        <div className='createParqueo' id='estadistica'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/management/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container'>
                <h1>Ver información general de los estacionamientos</h1>
                <div className='row'>
                    <div className='col'>
                        <div style={scrollTable}>
                            <table className="table table-bordered table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Email Responsible</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Schedule Start</th>
                                        <th scope="col">Schedule End</th>
                                        <th scope="col">Space</th>
                                        <th scope="col">Reserved Space</th>
                                        <th scope="col">Disabled Space</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { parkings.map((parking) => (
                                        <tr key = { parking.id }>
                                            <td>{ parking.name_parking }</td>
                                            <td>{ parking.type_parking }</td>
                                            <td>{ parking.email_responsible }</td>
                                            <td>{ parking.location_parking }</td>
                                            <td>{ parking.schedule_start }</td>
                                            <td>{ parking.schedule_end }</td>
                                            <td>{ parking.space_parking }</td>
                                            <td>{ parking.space_reserved }</td>
                                            <td>{ parking.space_disabled }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <h1>Ver información general de los funcionarios</h1>
                <div className='row'>
                    <div className='col'>
                        <div style={scrollTable}>
                            <table className="table table-bordered table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Full name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Email 2</th>
                                        <th scope="col">Type of user</th>
                                        <th scope="col">Phone number</th>
                                        <th scope="col">Job description</th>
                                        <th scope="col">Disability</th>
                                        <th scope="col">Department</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { funcionarios.map((funcionario) => (
                                        <tr key = { funcionario.email }>
                                            <td>{ funcionario.full_name }</td>
                                            <td>{ funcionario.email }</td>
                                            <td>{ funcionario.email2 }</td>
                                            <td>{ funcionario.type_user }</td>
                                            <td>{ funcionario.phone_number }</td>
                                            <td>{ funcionario.description_job }</td>
                                            <td>{ funcionario.disability }</td>
                                            <td>{ funcionario.id_department }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompStatistics