import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import '../Style.css'
import url_img from "../parking-lot-cars.jpg"
import { useNavigate } from 'react-router-dom';

const URIUserAuth = 'http://localhost:8000/'

const NavbarComponent = () => {
  const [email, setEmail] = useState('')
  const [password_user, setPassword_user] = useState('')
  const navigate = useNavigate()

  const auth = async (e) => {
    var bcrypt = require('bcryptjs');
    e.preventDefault()
    const authUserResult = await axios.post(URIUserAuth, {email: email, password_user: password_user})
    
    if (bcrypt.compareSync(password_user, authUserResult.data.password_user)) {
      if (authUserResult.data.type_user == "ADMINISTRADOR SISTEMA") {
        navigate(`/management/${authUserResult.data.email}`)
      } else {
        navigate(`/normalUserManagement/${authUserResult.data.email}`)
      }
    } else {
      throw alert("Incorrect password or email")
    }
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
              <h1>ParkTec</h1>
              <form className="d-flex" onSubmit={auth}>
                  <input className="form-control me-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    aria-label="Search"/>
                  <input className="form-control me-2"
                    value={password_user}
                    onChange={(e) => setPassword_user(e.target.value)}
                    type="password"
                    placeholder="Password"
                    aria-label="Search"/>
                  <button type='submit' className='btn btn-info'>Login</button>
              </form>
          </div>
      </nav>
      <div className="bg_image"
        style={{
          backgroundImage: `url(${url_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 657
        }}>
      </div>
    </div>
  )
}
export default NavbarComponent