import './Style.css';
import CompJefaturaManagementComponent from './components/gestionJefatura';
import GestionFuncionarioComponent from './components/gestionFuncionario';
import CompEncargadoManagementComponent from './components/gestionEncargado';

import ShowDepartmentComponent from './departamento/ShowDepartment';
import CompCreateDepartment from './departamento/CreateDepartment';
import CompEditDepartment from './departamento/EditDepartment.js';

import ShowParqueoComponent from './parqueo/ShowParqueo';
import CompCreateParqueo from './parqueo/CreateParqueo';
import CompEditParqueo from './parqueo/EditParqueo';

import ShowParqueoEncargadoComponent from './parqueo/ShowParqueoEncargado';
import CompEditParqueoEncargado from './parqueo/EditParqueoEncargado';

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

          <Route path='/management/:use_email' element={<GestionAdminComponent/>}/>

          <Route path='/JEFATURA/:use_email' element={<CompJefaturaManagementComponent/>}/>

          <Route path='/FUNCIONARIO/:use_email' element={<GestionFuncionarioComponent/>}/>

          <Route path='/ENCARGADO/:use_email' element={<CompEncargadoManagementComponent/>}/>

          <Route path='/contactUser/:use_email' element={<CompContactUser/>}/>
          <Route path='/statistics/:use_email' element={<CompStatistics/>}/>

          <Route path='/department/:use_email' element={<ShowDepartmentComponent/>}/>
          <Route path='/createDepartment/:use_email' element={<CompCreateDepartment/>}/>
          <Route path='/editDepartment/:use_email/:name_department' element={<CompEditDepartment/>}/>

          <Route path='/parking/:use_email' element={<ShowParqueoComponent/>}/>
          <Route path='/createParking/:use_email' element={<CompCreateParqueo/>}/>
          <Route path='/editParking/:use_email/:id' element={<CompEditParqueo/>}/>

          <Route path='/parkingEncargado/:use_email' element={<ShowParqueoEncargadoComponent/>}/>
          <Route path='/editParkingEncargado/:use_email/:id' element={<CompEditParqueoEncargado/>}/>

          <Route path='/registerUser/:use_email' element={<CompCreateUsuario/>}/>
          <Route path='/editUser/:use_email/:email' element={<CompEditUser/>}/>
          <Route path='/editNormalUser/:use_email' element={<CompEditNormalUser/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
