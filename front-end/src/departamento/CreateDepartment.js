import axios from 'axios'
import '../Style.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/department/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}


const CompCreateDepartment = () => {
    const [name_department, setName_department] = useState('')
    const navigate = useNavigate()

    const {use_email} = useParams()

    const createDepartment = async (e) => {
        e.preventDefault()
        await axios.post(URI, { name_department: name_department })
        navigate(`/department/${use_email}`)
    }

    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/department/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container col-4'>
                <h3>Create Department</h3>
                <form onSubmit={createDepartment}>
                    <div className='mb-3'>
                        <label className='form-label'>Department Name</label>
                        <input
                            value={name_department.replace(" ", "_")}
                            onChange={(e) => setName_department(e.target.value)}
                            type="text"
                            className='form-control'
                            required/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CompCreateDepartment