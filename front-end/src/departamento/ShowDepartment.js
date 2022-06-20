import axios from 'axios'
import '../Style.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/department/'

const btnInfoNavStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  marginLeft: "5px",
  marginRight: "5px"
}

const ShowDepartmentComponent = () => {
  const {use_email} = useParams()

  const [departments, setDepartments] = useState([])
    useEffect( () => {
      getDepartments()
    },[])

  const getDepartments = async () => {
      const res = await axios.get(URI);
      setDepartments(res.data);
  }

  const deleteDepartments = async (name_department) => {
      await axios.delete(`${URI}${name_department}`);
      getDepartments();
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
              <h1>ParkTec</h1>
              <form className="d-flex">
                  <Link to={`/management/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
                  <Link to={`/createDepartment/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Create Department</Link>
              </form>
          </div>
      </nav>
      <div className='row'>
        { departments.map((department) => (
          <div className='col-sm-3'>
            <div className="card" key={department.name_department}>
              <div className="card-body">
                <h4>{department.name_department}</h4>
                <Link to={`/editDepartment/${use_email}/${department.name_department}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Edit Department</Link>
                <button onClick={ () => deleteDepartments(department.name_department)} className='btn btn-danger' style={btnInfoNavStyle}><i className="fa-solid fa-circle-minus"></i></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowDepartmentComponent