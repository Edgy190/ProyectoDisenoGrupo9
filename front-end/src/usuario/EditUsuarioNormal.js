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

const CompEditNormalUser = () => {
    const [full_name, setFull_name] = useState('')
    const [emailRegis, setEmail] = useState('')
    const [emailRegis2, setEmail2] = useState('')
    const [password_user, setPassword_user] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [type_user, setType_user] = useState('')
    const { use_email } = useParams()
    const navigate = useNavigate()

    const updateUsuario = async (e) => {
        const hashedPassword = bcrypt.hashSync(password_user, 8);
        e.preventDefault()
        await axios.put(URIUser+use_email, {
            full_name: full_name,
            email: emailRegis,
            email2: emailRegis2,
            password_user: hashedPassword,
            phone_number: phone_number,
        })
        navigate(`/${type_user}/${use_email}`)
    }
    
    useEffect( () => {
        getUsuarioByEmail()
    }, [])
    const getUsuarioByEmail = async () => {
        const res = await axios.get(URIUser+use_email)
        setFull_name(res.data.full_name)
        setEmail(res.data.email)
        setEmail2(res.data.email2)
        setPhone_number(res.data.phone_number)
        setType_user(res.data.type_user)
    }
    
    return(
        <div className='createParqueo'>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/${type_user}/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                    </form>
                </div>
            </nav>
            <div className='container col-4'>
                <h3>Edit Profile</h3>
                <form onSubmit={updateUsuario}>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input
                            value={emailRegis}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Alternate Email *Optional</label>
                        <input
                            value={emailRegis2}
                            onChange={(e) => setEmail2(e.target.value)}
                            type="email"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input
                            value={password_user}
                            onChange={(e) => setPassword_user(e.target.value)}
                            type="password"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Full Name</label>
                        <input
                            value={full_name}
                            onChange={(e) => setFull_name(e.target.value)}
                            type="text"
                            className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Phone Number</label>
                        <input
                            value={phone_number}
                            onChange={(e) => setPhone_number(e.target.value)}
                            max={99999999}
                            min={10000000}
                            type="number"
                            className='form-control'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>
            </div>
        </div>
    )
}

export default CompEditNormalUser