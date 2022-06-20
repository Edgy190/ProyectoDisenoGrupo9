import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/parking/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompEditParqueoEncargado = () => {
    const [name_parking, setName_parking] = useState('')
    const [location_parking, setLocation_parking] = useState('')
    const [schedule_start, setSchedule_start] = useState('')
    const [schedule_end, setSchedule_end] = useState('')
    const [space_parking, setSpace_parking] = useState('')
    const [space_reserved, setSpace_reserved] = useState('')
    const [space_disabled, setSpace_disabled] = useState('')
    const navigate = useNavigate()
    
    const {id} = useParams()
    const {use_email} = useParams()

    const updateParqueo = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name_parking: name_parking,
            location_parking: location_parking,
            schedule_start: schedule_start,
            schedule_end: schedule_end,
            space_parking: space_parking,
            space_reserved: space_reserved,
            space_disabled: space_disabled
        })
        navigate(`/parkingEncargado/${use_email}`)
    }
    
    useEffect( () => {
        getParqueoById()
    }, [])
    
    const getParqueoById = async () => {
        const res = await axios.get(URI+id)
        setName_parking(res.data.name_parking)
        setLocation_parking(res.data.location_parking)
        setSchedule_start(res.data.schedule_start)
        setSchedule_end(res.data.schedule_end)
        setSpace_parking(res.data.space_parking)
        setSpace_reserved(res.data.space_reserved)
        setSpace_disabled(res.data.space_disabled)
    }

    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/parkingEncargado/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container col-4'>
                <h3>Create Parking</h3>
                <form onSubmit={updateParqueo}>
                    <div className='mb-3'>
                        <label className='form-label'>Parking Name</label>
                        <input
                            value={name_parking}
                            onChange={(e) => setName_parking(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Location</label>
                        <textarea
                            value={location_parking}
                            onChange={(e) => setLocation_parking(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Schedule Start</label>
                        <input
                            value={schedule_start}
                            onChange={(e) => setSchedule_start(e.target.value)}
                            type="time"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Schedule End</label>
                        <input
                            value={schedule_end}
                            onChange={(e) => setSchedule_end(e.target.value)}
                            type="time"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space Available</label>
                        <input
                            value={space_parking}
                            onChange={(e) => setSpace_parking(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space Reserved</label>
                        <input
                            value={space_reserved}
                            onChange={(e) => setSpace_reserved(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Space For Disabled</label>
                        <input
                            value={space_disabled}
                            onChange={(e) => setSpace_disabled(e.target.value)}
                            type="number"
                            min={0}
                            className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>
            </div>
        </div>
    )
}

export default CompEditParqueoEncargado