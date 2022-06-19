import axios from 'axios'
import '../Style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/parking/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}


const CompCreateParqueo = () => {
    const [name_parking, setName_parking] = useState('')
    const [type_parking, setType_parking] = useState('')
    const [email_responsible, setEmail_responsible] = useState('')
    const [location_parking, setLocation_parking] = useState('')
    const [schedule_start, setSchedule_start] = useState('')
    const [schedule_end, setSchedule_end] = useState('')
    const [space_parking, setSpace_parking] = useState('')
    const [space_reserved, setSpace_reserved] = useState('')
    const [space_disabled, setSpace_disabled] = useState('')
    const navigate = useNavigate()

    const {use_email} = useParams()

    const createParking = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name_parking: name_parking, type_parking: type_parking, email_responsible: email_responsible,
            location_parking: location_parking, schedule_start: schedule_start, schedule_end: schedule_end,
            space_parking: space_parking, space_reserved: space_reserved, space_disabled: space_disabled})
        navigate(`/parking/${use_email}`)
    }

    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/parking/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container col-4'>
                <h3>Create Parking</h3>
                <form onSubmit={createParking}>
                    <div className='mb-3'>
                        <label className='form-label'>Parking Name</label>
                        <input
                            value={name_parking}
                            onChange={(e) => setName_parking(e.target.value)}
                            type="text"
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Type of Parking</label>
                        <select className="form-select" aria-label="Default select example" value={type_parking} onChange={(e) => setType_parking(e.target.value)} required>
                            <option selected>Select a type</option>
                            <option value="PROPIO" className="form-select">Propio</option>
                            <option value="SUBCONTRATADO" className="form-select">Subcontratado</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Responsible Email</label>
                        <input
                            value={email_responsible}
                            onChange={(e) => setEmail_responsible(e.target.value)}
                            type="email"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Location</label>
                        <textarea
                            value={location_parking}
                            onChange={(e) => setLocation_parking(e.target.value)}
                            type="text"
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Schedule Start</label>
                        <input
                            value={schedule_start}
                            onChange={(e) => setSchedule_start(e.target.value)}
                            type="time"
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Schedule End</label>
                        <input
                            value={schedule_end}
                            onChange={(e) => setSchedule_end(e.target.value)}
                            type="time"
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space Available</label>
                        <input
                            value={space_parking}
                            onChange={(e) => setSpace_parking(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space Reserved</label>
                        <input
                            value={space_reserved}
                            onChange={(e) => setSpace_reserved(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'
                            required/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space For Disabled</label>
                        <input
                            value={space_disabled}
                            onChange={(e) => setSpace_disabled(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'
                            required/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CompCreateParqueo