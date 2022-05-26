import React from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css';
import {Link} from 'react-router-dom'

const iconStyle = {
    fontSize: 200,
    height: "200px",
    width: "200px",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
}

const btnInfoStyle = {
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px"
}

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}

const GestionAdminComponent = () => {

    const {email} = useParams()

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1>ParkTec</h1>
                    <form className="d-flex">
                        <Link to={`/`} className="btn btn-info" style={btnInfoNavStyle} type="button">Logout</Link>
                        <Link to={`/registerUser/${email}`} className="btn btn-info" style={btnInfoNavStyle} type="button">Register User</Link>
                    </form>
                </div>
            </nav>
            <div className='centerButton'>
                <Link to={`/parking/${email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-square-parking" style={iconStyle}><h5>MANAGE PARKING</h5></i></Link>
                <Link to={`/contactUser/${email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-envelope" style={iconStyle}><h5>CONTACT USER</h5></i></Link>
            </div>
            <div className='centerButton'>
                <Link to={`/editUser/${email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-pen-to-square" style={iconStyle}><h5>EDIT PROFILE</h5></i></Link>
                <Link to={`/statistics/${email}`} className="btn btn-info" style={btnInfoStyle} type="button"><i className="fa-solid fa-chart-pie" style={iconStyle}><h5>STATISTICS</h5></i></Link>
            </div>
        </div>
    )
}

export default GestionAdminComponent