import './Style.css';
import CompNormalManagementComponent from './components/gestionGeneral';
import ShowParqueoComponent from './parqueo/ShowParqueo';
import CompCreateParqueo from './parqueo/CreateParqueo';
import CompEditParqueo from './parqueo/EditParqueo';
import CompCreateUsuario from './usuario/CreateUsuario';
import CompEditUser from './usuario/EditUsuarioAdmin';
import CompEditNormalUser from './usuario/EditUsuarioNormal';
import NavbarComponent from './components/Navbar';
import GestionAdminComponent from './components/gestionAdmin';
import CompContactUser from './otherViews/contactUser';
import CompStatistics from './otherViews/statistics';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarComponent/>}/>
          <Route path='/normalUserManagement/:email' element={<CompNormalManagementComponent/>}/>
          <Route path='/management/:email' element={<GestionAdminComponent/>}/>
          <Route path='/contactUser/:email' element={<CompContactUser/>}/>
          <Route path='/statistics/:email' element={<CompStatistics/>}/>
          <Route path='/parking/:email' element={<ShowParqueoComponent/>}/>
          <Route path='/createParking/:email' element={<CompCreateParqueo/>}/>
          <Route path='/editParking/:email/:id' element={<CompEditParqueo/>}/>
          <Route path='/registerUser/:email' element={<CompCreateUsuario/>}/>
          <Route path='/editUser/:email' element={<CompEditUser/>}/>
          <Route path='/editNormalUser/:email' element={<CompEditNormalUser/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
