import axios from 'axios';
import '../Style.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const URIUser = `http://localhost:8000/registerUser/`
const URIDepartment = 'http://localhost:8000/departmentUser/'

var bcrypt = require('bcryptjs');

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
  }

const CompCreateUsuario = () => {
    const {use_email} = useParams()

    const [full_name, setFull_name] = useState('')
    const [emailRegis, setEmail] = useState('')
    const [emailRegis2, setEmail2] = useState('')
    const [password_user, setPassword_user] = useState('')
    const [type_user, setType_user] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [description_job, setDescription_job] = useState('')
    const [id_department, setId_department] = useState('')
    
    const [departments, setDepartments] = useState([])
    useEffect( () => {
      getDepartments()
    },[])
    const getDepartments = async () => {
        const res = await axios.get(URIDepartment);
        setDepartments(res.data);
    }

    const navigate = useNavigate()

    const createUser = async (e) => {
        const hashedPassword = bcrypt.hashSync(password_user, 8);
        e.preventDefault();
        await axios.post(URIUser, {full_name: full_name, email: emailRegis, email2: emailRegis2,
            password_user: hashedPassword, type_user: type_user, phone_number: phone_number,
            description_job: description_job, id_department: id_department});
        navigate(`/management/${use_email}`);
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
                <h3>Create User</h3>
                <form onSubmit={createUser}>
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
                    <button type='submit' className='btn btn-primary'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CompCreateUsuario