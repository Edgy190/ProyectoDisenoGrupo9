import axios from 'axios'
import '../Style.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/parkingEncargado/'

const btnInfoNavStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  marginLeft: "5px",
  marginRight: "5px"
}

const ShowParqueoEncargadoComponent = () => {
  const { use_email } = useParams()

  const [parkings, setParking] = useState([])
    useEffect( () => {
      getParkings()
    },[])

  const getParkings = async () => {
    const res = await axios.get(URI+use_email);
    setParking(res.data);
  }
  console.log(parkings)
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
              <h1>ParkTec</h1>
              <form className="d-flex">
                  <Link to={`/ENCARGADO/${use_email}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Return</Link>
              </form>
          </div>
      </nav>
      <div className='row'>
        { parkings.map((parking) => (
          <div className='col-sm-3'>
            <div className="card" key={parking.id}>
              <div className="card-body">
                <h1>{parking.name_parking}</h1>
                  <p>Type: {parking.type_parking}</p>
                  <p>Location: {parking.location_parking}</p>
                  <p>Schedule Start: {parking.schedule_start}</p>
                  <p>Schedule End: {parking.schedule_end}</p>
                  <p>Space Available: {parking.space_parking}</p>
                  <p>Space Reserved: {parking.space_reserved}</p>
                  <p>Space For Disabled: {parking.space_disabled}</p>
                <Link to={`/editParkingEncargado/${use_email}/${parking.id}`} className="btn btn-info" style={btnInfoNavStyle} type="submit">Edit Parking</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowParqueoEncargadoComponent