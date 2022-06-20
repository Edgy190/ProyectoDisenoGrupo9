import axios from 'axios'
import '../Style.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';

const URIUser = 'http://localhost:8000/registerUser/'
const URIDepartment = 'http://localhost:8000/department/'

var bcrypt = require('bcryptjs');

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompEditUser = () => {
    const [full_name, setFull_name] = useState('')
    const [emailRegis, setEmail] = useState('')
    const [emailRegis2, setEmail2] = useState('')
    const [password_user, setPassword_user] = useState('')
    const [type_user, setType_user] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [description_job, setDescription_job] = useState('')
    const [id_department, setId_department] = useState('')

    const {use_email, email} = useParams()
    const navigate = useNavigate()

    const updateUsuario = async (e) => {
        const hashedPassword = bcrypt.hashSync(password_user, 8);
        e.preventDefault()
        await axios.put(URIUser+email, {
            full_name: full_name,
            email: emailRegis,
            email2: emailRegis2,
            password_user: hashedPassword,
            type_user: type_user,
            phone_number: phone_number,
            description_job: description_job,
            id_department: id_department
        })
        navigate(`/management/${use_email}`)
    }
    
    useEffect( () => {
        getUsuarioByEmail()
    }, [])
    
    const getUsuarioByEmail = async () => {
        const res = await axios.get(URIUser+email)
        setFull_name(res.data.full_name)
        setEmail(res.data.email)
        setEmail2(res.data.email2)
        setType_user(res.data.type_user)
        setPhone_number(res.data.phone_number)
        setDescription_job(res.data.description_job)
        setId_department(res.data.id_department)
    }

    const [departments, setDepartments] = useState([])
    useEffect( () => {
      getDepartments()
    },[])
    const getDepartments = async () => {
        const res = await axios.get(URIDepartment);
        setDepartments(res.data);
    }
    
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
            <div className='container col-4'>
                <h3>Edit Profile</h3>
                <form onSubmit={updateUsuario}>
                    <div className='mb-3'>
                        <label className='form-label'>Email*</label>
                        <input
                            value={emailRegis}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Alternate Email</label>
                        <input
                            value={emailRegis2}
                            onChange={(e) => setEmail2(e.target.value)}
                            type="email"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password*</label>
                        <input
                            value={password_user}
                            onChange={(e) => setPassword_user(e.target.value)}
                            type="password"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Full Name*</label>
                        <input
                            value={full_name}
                            onChange={(e) => setFull_name(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Phone Number*</label>
                        <input
                            value={phone_number}
                            onChange={(e) => setPhone_number(e.target.value)}
                            max={99999999}
                            min={10000000}
                            type="number"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Type of User*</label>
                        <select className="form-select" aria-label="Default select example" value={type_user} onChange={(e) => setType_user(e.target.value)}>
                            <option selected>Select a type</option>
                            <option value="ADMINISTRADOR SISTEMA" className="form-select">Admin</option>
                            <option value="JEFATURA" className="form-select">Jefatura</option>
                            <option value="FUNCIONARIO" className="form-select">Funcionario</option>
                            <option value="ENCARGADO" className="form-select">Encargado</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Department*</label>
                        <select className="form-select" aria-label="Default select example" value={id_department} onChange={(e) => setId_department(e.target.value)}>
                            <option selected>Select a Department</option>
                            { departments.map((department) => (
                                <option key={department.id} value={department.id} className="form-select">{department.name_department}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Job Description*</label>
                        <textarea
                            value={description_job}
                            onChange={(e) => setDescription_job(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>
            </div>
        </div>
    )
}

export default CompEditUser