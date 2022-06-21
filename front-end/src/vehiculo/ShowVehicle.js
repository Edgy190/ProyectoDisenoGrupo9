import axios from 'axios'
import '../Style.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const URIVehicle = 'http://localhost:8000/vehicle/'
const URIVehicleXUser = 'http://localhost:8000/vehicleXuser/'
const URIUser = 'http://localhost:8000/registerUser/'

const btnInfoNavStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  marginLeft: "5px",
  marginRight: "5px"
}

const ShowVehicleComponent = () => {
    const { use_email } = useParams()

    const [vehicles, setVehicle] = useState([])
    useEffect( () => {
        getVehicles()
    },[])
    const getVehicles = async () => {
        const res = await axios.get(URIVehicle);
        setVehicle(res.data);
    }
    const deleteVehicle = async (vehicle_plate) => {
        await axios.delete(`${URIVehicle}${vehicle_plate}`);
        await axios.delete(`${URIVehicleXUser}${vehicle_plate}`);
        getVehicles();
    }

    const [type_user, setType_user] = useState('')
    useEffect( () => {
        getUsuarioByEmail()
    }, [])
    const getUsuarioByEmail = async () => {
        const res = await axios.get(URIUser+use_email)
        setType_user(res.data.type_user)
    }
    return (
    <div>
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <h1>ParkTec</h1>
                <form className="d-flex">
                    <Link to={`/${type_user}/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    <Link to={`/createVehicle/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Create Parking</Link>
                </form>
            </div>
        </nav>
        <div className='row'>
        { vehicles.map((vehicle) => (
            <div className='col-sm-3'>
            <div className="card" key={vehicle.vehicle_plate}>
                <div className="card-body">
                    <h1>{vehicle.vehicle_plate}</h1>
                    <p>Brand: {vehicle.vehicle_brand}</p>
                    <p>Series: {vehicle.vehicle_series}</p>
                    <p>Status: {vehicle.official}</p>
                    <Link to={`/editVehicle/${use_email}/${vehicle.vehicle_plate}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Edit Vehicle</Link>
                    <button onClick={ () => deleteVehicle(vehicle.vehicle_plate)} className='btn btn-danger' style={btnInfoNavStyle}><i className="fa-solid fa-circle-minus"></i></button>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default ShowVehicleComponent