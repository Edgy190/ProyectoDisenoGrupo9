import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URIVehicle = 'http://localhost:8000/vehicle/'
const URIVehicleXUser = 'http://localhost:8000/vehicleXuser/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompEditVehicle = () => {
    const {use_email, vehicle_plate} = useParams()
    const [vehicle_plateChange, setVehicle_plate] = useState('')
    const [vehicle_brand, setVehicle_brand] = useState('')
    const [vehicle_series, setVehicle_series] = useState('')
    const [official, setOfficial] = useState('')
    const navigate = useNavigate()

    const updateVehicle = async (e) => {
        e.preventDefault()
        await axios.put(URIVehicleXUser+vehicle_plate, {
            vehicle_plate: vehicle_plateChange,
            email: use_email
        })
        await axios.put(URIVehicle+vehicle_plate, {
            vehicle_plate: vehicle_plateChange,
            vehicle_brand: vehicle_brand,
            vehicle_series: vehicle_series,
            official: official
        })
        navigate(`/vehicle/${use_email}`)
    }
    useEffect( () => {
        getVehicleByPlate()
    }, [])
    const getVehicleByPlate = async () => {
        const res = await axios.get(URIVehicle+vehicle_plate)
        setVehicle_plate(res.data.vehicle_plate)
        setVehicle_brand(res.data.vehicle_brand)
        setVehicle_series(res.data.vehicle_series)
        setOfficial(res.data.official)
    }
    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/vehicle/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container col-4'>
                <h3>Create Parking</h3>
                <form onSubmit={updateVehicle}>
                <div className='mb-3'>
                        <label className='form-label'>Plate</label>
                        <input
                            value={vehicle_plateChange}
                            onChange={(e) => setVehicle_plate(e.target.value)}
                            type="text"
                            className='form-control'
                            required
                            maxLength={6}/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Brand</label>
                        <input
                            value={vehicle_brand}
                            onChange={(e) => setVehicle_brand(e.target.value)}
                            type="text"
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Series</label>
                        <input
                            value={vehicle_series}
                            onChange={(e) => setVehicle_series(e.target.value)}
                            type="text"
                            className='form-control'
                            required/>
                    </div>
                    <div>
                        <label className='form-label'>Status</label>
                        <select className="form-select" aria-label="Default select example" value={official} onChange={(e) => setOfficial(e.target.value)}>
                            <option selected>Select Status</option>
                            <option value="OFFICIAL" className="form-select">Official</option>
                            <option value="UNOFFICIAL" className="form-select">Not Official</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>
            </div>
        </div>
    )
}

export default CompEditVehicle