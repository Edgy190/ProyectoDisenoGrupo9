import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/department/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompEditDepartment = () => {
    const [name_departmentChange, setName_department] = useState('')
    const navigate = useNavigate()
    
    const {name_department} = useParams()
    const {use_email} = useParams()

    const updateDepartment = async (e) => {
        e.preventDefault()
        console.log(name_departmentChange)
        name_departmentChange.replace(" ", "_");
        console.log(name_departmentChange)
        await axios.put(URI+name_department, {
            name_department: name_departmentChange
        })
        navigate(`/department/${use_email}`)
    }
    
    useEffect( () => {
        getDepartmentByName_department()
    }, [])
    
    const getDepartmentByName_department = async () => {
        const res = await axios.get(URI+name_department)
        setName_department(res.data.name_department)
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
                <h3>Edit Department</h3>
                <form onSubmit={updateDepartment}>
                    <div className='mb-3'>
                        <label className='form-label'>Department Name</label>
                        <input
                            value={name_departmentChange.replace(" ", "_")}
                            onChange={(e) => setName_department(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>
            </div>
        </div>
    )
}

export default CompEditDepartment