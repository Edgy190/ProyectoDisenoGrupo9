import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style.css'
import {Link} from 'react-router-dom'

const URIUser = 'http://localhost:8000/registerUser/'

const btnInfoNavStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
    marginRight: "5px"
}

const scrollTable = {
    height: "225px",
    overflow: "auto"
}

//var nodemailer = require('nodemailer');

const CompContactUser = () => {
    const {use_email} = useParams()
    const [emailInput, setEmailInput] = useState('')
    const [message, setMessage] = useState('')

    const [users, setUsers] = useState([])
    useEffect( () => {
        getUsers()
    },[])
    const getUsers = async () => {
        const res = await axios.get(URIUser);
        setUsers(res.data);
    }
    const deleteUser = async (email) => {
        await axios.delete(`${URIUser}${email}`);
        getUsers();
    }

    const sendMessage = async () => {
        /*var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'parktecnoreply@gmail.com',
                pass: 'parktec2022'
            }
        });
        var mailOptions = {
            from: 'parktecnoreply@gmail.com',
            to: emailInput,
            subject: 'Message from ParkTec',
            text: message
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });*/
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
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div style={scrollTable}>
                            <table className="table table-bordered table-info">
                                <thead>
                                    <tr>
                                        <th scope="col">Full name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Email 2</th>
                                        <th scope="col">Type of user</th>
                                        <th scope="col">Phone number</th>
                                        <th scope="col">Job description</th>
                                        <th scope="col">Disability</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.map((user) => (
                                        <tr key = { user.email }>
                                            <td>{ user.full_name }</td>
                                            <td>{ user.email }</td>
                                            <td>{ user.email2 }</td>
                                            <td>{ user.type_user }</td>
                                            <td>{ user.phone_number }</td>
                                            <td>{ user.description_job }</td>
                                            <td>{ user.disability }</td>
                                            <td>{ user.id_department }</td>
                                            <td><Link to={`/editUser/${use_email}/${user.email}`} className="btn btn-info" type="button"><i className="fa-solid fa-pen-to-square"></i></Link></td>
                                            <td><button onClick={ () => deleteUser(user.email)} className='btn btn-danger' style={btnInfoNavStyle}><i className="fa-solid fa-circle-minus"></i></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <form onSubmit={sendMessage}>
                    <h5>Contact User</h5>
                    <div className='row'>
                        <label>Email</label>
                        <input
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            type="email"
                            className='form-control'>
                        </input>
                    </div>
                    <div className='row'>
                        <label>Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            className='form-control'>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default CompContactUser